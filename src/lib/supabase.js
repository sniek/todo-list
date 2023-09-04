import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ruxyxqjfgkgodyopoqga.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1eHl4cWpmZ2tnb2R5b3BvcWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4NDk3MDUsImV4cCI6MjAwNzQyNTcwNX0.SSd225aJK03DjI4BOy0bI8OyIaJ8tihKfml6X3MX1CU";

export default createClient(supabaseUrl, supabaseAnonKey);