export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterFields {
  displayName: string;
  email: string;
  password: string;
}

export type LoginResponse =
  | {
      success: true;
    }
  | {
      success: false;
      error: string;
    };
