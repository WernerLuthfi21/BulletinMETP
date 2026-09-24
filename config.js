/* ==========================================================================
   METP Bulletin — public configuration
   --------------------------------------------------------------------------
   Leave both values empty to run in DEMO MODE (bundled issue, suggestions
   stored only on this browser). To enable the shared backend, fill in your
   Supabase project values — see README.md → "Backend setup".

   These two values are PUBLIC by design (the anon key is safe in a browser
   *because* Row Level Security protects the data). NEVER put a service-role
   key here.
   ========================================================================== */
window.METP_CONFIG = {
  supabaseUrl: "",       // e.g. "https://abcdxyzcompany.supabase.co"
  supabaseAnonKey: "",   // the project's public "anon" key
  bucket: "bulletins",   // private Storage bucket that holds uploaded issues
  maxUploadMB: 25        // client-side upload limit (also set it in Supabase)
};
