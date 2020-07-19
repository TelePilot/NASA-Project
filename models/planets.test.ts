import {
	assertEquals,
	assertNotEquals,
} from 'https://deno.land/std/testing/asserts.ts'

Deno.test('short example test', () => {
	assertEquals('deno', 'deno')
	assertNotEquals(
		{
			runtime: 'deno',
		},
		{
			runtime: 'node',
		}
	)
})

Deno.test({
	name: 'example test',
	ignore: Deno.build.os === 'linux',
	fn() {
		assertEquals('deno', 'deno')
		assertNotEquals(
			{
				runtime: 'deno',
			},
			{
				runtime: 'node',
			}
		)
	},
})
Deno.test({
	name: 'example taaaest leak',
	sanitizeOps: false,
	fn() {
		setTimeout(console.log, 1000)
	},
})

Deno.test({
	name: 'exampleaest leak',
	sanitizeResources: false,
	async fn() {
		await Deno.open('./models/planets.ts')
	},
})
