cd src
deno compile -o ../target/x86_64-unknown-linux-gnu --target x86_64-unknown-linux-gnu index.ts
deno compile -o ../target/x86_64-pc-windows-msvc --target x86_64-pc-windows-msvc index.ts
deno compile -o ../target/x86_64-apple-darwin --target x86_64-apple-darwin index.ts
deno compile -o ../target/aarch64-apple-darwin --target aarch64-apple-darwin index.ts