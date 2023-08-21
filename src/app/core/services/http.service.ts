import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // Import the environment file

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  /**
   * Perform an HTTP GET request.
   * @param endpoint The endpoint for the GET request.
   * @param options The options for the request (e.g., headers, params, reportProgress).
   * @returns An observable of the HTTP response with the response body of type T.
   */
  get<T>(endpoint: string, options?: RequestOptions): Observable<T> {
    const url = this.getApiUrl(endpoint); // Construct the full API URL
    return this.http.get<T>(url, this.getRequestOptions(options));
  }

  /**
   * Perform an HTTP POST request.
   * @param endpoint The endpoint for the POST request.
   * @param body The request body data.
   * @param options The options for the request (e.g., headers, params, reportProgress).
   * @returns An observable of the HTTP response with the response body of type T.
   */
  post<T>(
    endpoint: string,
    body: any,
    options?: RequestOptions
  ): Observable<T> {
    const url = this.getApiUrl(endpoint); // Construct the full API URL
    return this.http.post<T>(url, body, this.getRequestOptions(options));
  }

  /**
   * Perform an HTTP PATCH request.
   * @param endpoint The endpoint for the PATCH request.
   * @param body The request body data.
   * @param options The options for the request (e.g., headers, params, reportProgress).
   * @returns An observable of the HTTP response with the response body of type T.
   */
  patch<T>(
    endpoint: string,
    body: any,
    options?: RequestOptions
  ): Observable<T> {
    const url = this.getApiUrl(endpoint); // Construct the full API URL
    return this.http.patch<T>(url, body, this.getRequestOptions(options));
  }

  /**
   * Perform an HTTP PUT request.
   * @param endpoint The endpoint for the PUT request.
   * @param body The request body data.
   * @param options The options for the request (e.g., headers, params, reportProgress).
   * @returns An observable of the HTTP response with the response body of type T.
   */
  put<T>(endpoint: string, body: any, options?: RequestOptions): Observable<T> {
    const url = this.getApiUrl(endpoint); // Construct the full API URL
    return this.http.put<T>(url, body, this.getRequestOptions(options));
  }

  /**
   * Perform an HTTP DELETE request.
   * @param endpoint The endpoint for the DELETE request.
   * @param options The options for the request (e.g., headers, params, reportProgress).
   * @returns An observable of the HTTP response with the response body of type T.
   */
  delete<T>(endpoint: string, options?: RequestOptions): Observable<T> {
    const url = this.getApiUrl(endpoint); // Construct the full API URL
    return this.http.delete<T>(url, this.getRequestOptions(options));
  }

  /**
   * Perform an HTTP GET request to download a file.
   * @param endpoint The endpoint for the file download request.
   * @param options The options for the request (e.g., headers, params, reportProgress).
   * @returns An observable of the HTTP response with the file content as a Blob.
   */
  download(
    endpoint: string,
    options?: RequestOptions
  ): Observable<HttpResponse<Blob>> {
    const url = this.getApiUrl(endpoint); // Construct the full API URL
    return this.http.get(url, {
      ...this.getRequestOptions(options),
      responseType: 'blob',
      observe: 'response',
    });
  }

  /**
   * Helper function to construct the full API URL by appending the endpoint to the base URL.
   * @param endpoint The endpoint for the API request.
   * @returns The full API URL.
   */
  private getApiUrl(endpoint: string): string {
    return environment.apiUrl + endpoint;
  }

  /**
   * Helper function to build the request options for HTTP requests.
   * @param options The options for the request (e.g., headers, params, reportProgress).
   * @returns The request options with the specified properties.
   */
  private getRequestOptions(options?: RequestOptions): {
    headers?: HttpHeaders;
    params?: HttpParams;
    observe?: any;
  } {
    const requestOptions: {
      headers?: HttpHeaders;
      params?: HttpParams;
      observe?: any;
    } = {};

    if (options?.headers) {
      requestOptions.headers = options.headers;
    }

    if (options?.params) {
      requestOptions.params = options.params;
    }

    // Add 'observe' option if progress tracking is enabled
    if (options?.reportProgress) {
      requestOptions.observe = 'events';
    }

    return requestOptions;
  }
}

/**
 * Interface to define the options for HTTP requests.
 */
interface RequestOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  reportProgress?: boolean;
  // Add other optional properties for request options if needed
}
