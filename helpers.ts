export function input(message = ""): string {
  const buf = new Uint8Array(1024);
  Deno.stdout.writeSync(new TextEncoder().encode(`${message} `));
  const n = <number>Deno.stdin.readSync(buf);
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

export async function asyncInput(message: string): Promise<string> {
  const buf = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(`${message} `));
  const n = <number>await Deno.stdin.read(buf);
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}
