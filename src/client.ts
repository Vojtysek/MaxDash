import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://odwqblaacvgrzpvdgcdr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kd3FibGFhY3ZncnpwdmRnY2RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQwNzg0NzUsImV4cCI6MTk4OTY1NDQ3NX0.IFtIX-PMiGJ0EMB-yyXwLM6K7u13fBMUMlNQj44stWI"
);

export { supabase };
