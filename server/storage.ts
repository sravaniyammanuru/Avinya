import { users, type User, type InsertUser, registrations, type Registration, type InsertRegistration } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getAllRegistrations(): Promise<Registration[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private registrationsMap: Map<number, Registration>;
  userCurrentId: number;
  registrationCurrentId: number;

  constructor() {
    this.users = new Map();
    this.registrationsMap = new Map();
    this.userCurrentId = 1;
    this.registrationCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = this.registrationCurrentId++;
    const registration: Registration = { ...insertRegistration, id };
    this.registrationsMap.set(id, registration);
    return registration;
  }

  async getAllRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrationsMap.values());
  }
}

export const storage = new MemStorage();
