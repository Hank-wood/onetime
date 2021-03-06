import test from 'ava';
import m from './';

test('call function once', t => {
	let i = 0;
	const f = m(() => i++);
	t.is(f(), 0);
	t.is(f(), 0);
	t.is(f(), 0);
});

test('option to throw is called more than once', t => {
	const f = m(() => {}, {throw: true});
	f();
	t.throws(f, Error);
});
