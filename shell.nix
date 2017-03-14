{ pkgs ? import <nixpkgs> {} }:

with pkgs;

stdenv.mkDerivation {
  name = "candela";

  buildInputs = [
    nodejs
    fontconfig.lib
    fontconfig.dev
    freetype
    zlib
  ];

  C_INCLUDE_PATH = "${fontconfig.dev}/include";
  LD_LIBRARY_PATH = builtins.concatStringsSep ":" (map (x: "${x}/lib") [
    zlib
    fontconfig.lib
    freetype
    stdenv.cc.cc.lib
  ]);

  shellHook = ''
    echo "Candela nix dev environment"
  '';
}
