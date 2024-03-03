import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wkzszlyetpghtxgbpdjo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrenN6bHlldHBnaHR4Z2JwZGpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0NDcyODAsImV4cCI6MjAyNDAyMzI4MH0.vBRgW3oqvZBF3yEQX3f_IJyZIbMKeP6UUOkDczM0Fm4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
