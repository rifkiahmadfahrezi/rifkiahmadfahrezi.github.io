import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  'https://brppdjgvxfgszqavezdm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycHBkamd2eGZnc3pxYXZlemRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzNzQzMTgsImV4cCI6MjAxODk1MDMxOH0.iB0I-lZZGbcfpVQdyspr1IRsqaZvLy9q27hiiMXx4_M'
);

export default supabase;