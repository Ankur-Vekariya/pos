import { createClient } from '@supabase/supabase-js'

export const REACT_APP_SUPABASE_URL="https://mbwtlxqesprrfazjeows.supabase.co"
const REACT_APP_SUPABASE_PUBLIC_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1id3RseHFlc3BycmZhemplb3dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY4MzQ0MDYsImV4cCI6MjA0MjQxMDQwNn0.ZIsQ8HLSWfMePlamvC5WoloxXbB16Y7Vw035mgq-aNM"


export const supabase = createClient(
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_PUBLIC_KEY
)

// export { supabase }