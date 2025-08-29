// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ctvesptsfavadcayefha.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dmVzcHRzZmF2YWRjYXllZmhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NjE4ODIsImV4cCI6MjA2NTIzNzg4Mn0.hi5N1rtvcOVngzQiWZeSjGe9srxHO3aCtEACz3kHn7U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
