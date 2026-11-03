export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export type ContactStatus = 'idle' | 'loading' | 'ok' | 'err';
