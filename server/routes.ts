import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Registration API endpoint
  app.post('/api/register', async (req: Request, res: Response) => {
    try {
      // Validate the request body against the schema
      const parsedData = insertRegistrationSchema.parse(req.body);
      
      // Store the registration
      const registration = await storage.createRegistration(parsedData);
      
      return res.status(201).json({
        success: true,
        message: 'Registration successful',
        data: registration
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: validationError.message
        });
      }
      
      // Handle other errors
      console.error('Registration error:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred during registration'
      });
    }
  });

  // Get all registrations
  app.get('/api/registrations', async (_req: Request, res: Response) => {
    try {
      const registrations = await storage.getAllRegistrations();
      return res.status(200).json({
        success: true,
        data: registrations
      });
    } catch (error) {
      console.error('Error fetching registrations:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while fetching registrations'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
