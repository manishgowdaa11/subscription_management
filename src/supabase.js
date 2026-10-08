import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fxverjicllftwsntgdof.supabase.co";
const supabaseKey = "sb_publishable_Hy7wLTsOPJhwnZNp9HpIEw_g2TZOAea";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);