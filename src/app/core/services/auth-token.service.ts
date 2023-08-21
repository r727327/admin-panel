import { Injectable } from '@angular/core';

@Injectable()
export class AuthTokenService {
  private authTokenKey = 'a4c8sd3'; // The obfuscated key (random string)
  private authToken: string | null = null;

  constructor() {
    // Check if the authentication token exists in the local storage on service initialization
    this.authToken = this.getAuthTokenFromLocalStorage();
  }

  /**
   * Get the authentication token.
   * @returns The authentication token.
   */
  getAuthToken(): string | null {
    return this.authToken;
  }

  /**
   * Set the authentication token.
   * @param token The authentication token to be set.
   */
  setAuthToken(token: string): void {
    this.authToken = token;
    const obfuscatedKey = this.encode(this.authToken);
    localStorage.setItem(this.authTokenKey, obfuscatedKey);
  }

  /**
   * Clear the authentication token.
   */
  clearAuthToken(): void {
    this.authToken = null;
    localStorage.removeItem(this.authTokenKey);
  }

  /**
   * Get the authentication token from local storage and de-obfuscate it.
   * @returns The authentication token.
   */
  private getAuthTokenFromLocalStorage(): string | null {
    const obfuscatedKey = localStorage.getItem(this.authTokenKey);
    return obfuscatedKey ? this.decode(obfuscatedKey) : null;
  }

  // ... (rest of the code remains the same)

  // Simple encoding function (you can implement a more secure encoding/encryption method)
  private encode(str: string): string {
    // For simplicity, this is just a basic example. Use a more secure encoding/encryption method in production.
    return btoa(str);
  }

  // Simple decoding function (you can implement a more secure encoding/encryption method)
  private decode(encodedStr: string): string {
    // For simplicity, this is just a basic example. Use a more secure encoding/encryption method in production.
    return atob(encodedStr);
  }
}
