export type SharedPropAuth = {
  auth?: { id: string; name: string; email: string; created_at?: string; updated_at?: string };
};

export type SharedPropFlashMessage = {
  flashMessage?: {
    type: 'error' | 'success';
    text: string;
  };
};
