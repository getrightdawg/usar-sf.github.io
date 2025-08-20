/**
 * storage.ts
 *
 * This file defines an in-memory storage system for user data.
 * It includes:
 *   - IStorage interface: defines the contract for any storage implementation
 *   - MemStorage class: an in-memory implementation of IStorage using a Map
 *   - storage instance: singleton instance of MemStorage for app-wide use
 *
 * Usage:
 *   - Use `storage` to get, create, or query users
 *   - Replace MemStorage with a database-backed implementation if needed
 */

import { type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";

/**
 * IStorage interface
 * - Defines the methods required for a user storage system
 */
export interface IStorage {
  /**
   * Retrieve a user by their unique ID
   * @param id - User's unique identifier
   * @returns A Promise resolving to the User object or undefined if not found
   */
  getUser(id: string): Promise<User | undefined>;

  /**
   * Retrieve a user by their username
   * @param username - User's username
   * @returns A Promise resolving to the User object or undefined if not found
   */
  getUserByUsername(username: string): Promise<User | undefined>;

  /**
   * Create a new user and store it
   * @param user - InsertUser object containing username and password
   * @returns A Promise resolving to the newly created User
   */
  createUser(user: InsertUser): Promise<User>;
}

/**
 * MemStorage class
 * - In-memory implementation of IStorage using a Map
 * - Useful for development or testing without a real database
 */
export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

/**
 * Singleton instance of MemStorage for app-wide usage
 */
export const storage = new MemStorage();
