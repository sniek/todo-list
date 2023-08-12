import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wzcgwwuizbisuxjxhyrx.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6Y2d3d3VpemJpc3V4anhoeXJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1MTE4MTcsImV4cCI6MjAwNzA4NzgxN30.PHap9mElgHKhyIucntd7KcwQIs3pkWSgO_LBpPfjkLY";

export default createClient(supabaseUrl, supabaseAnonKey);