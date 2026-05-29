{
  pkgs,
  lib,
  config,
  ...
}:
{
  languages.javascript.enable = true;
  languages.typescript.enable = true;

  # Serve the static site locally for development/preview.
  scripts.serve.exec = "pnpm dlx serve -l 8000 .";
}
