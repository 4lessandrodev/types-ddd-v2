import { Aggregate, Entity, ID, Result, ValueObject } from "../../lib/core";
import { IResult } from "../../lib/index.types";
import { ValidateType } from "../../lib/utils/check-types";

describe('check-types', () => {

	const checker = ValidateType.create();
	class Agg extends Aggregate<any>{
		private constructor(props: any) {
			super(props)
		}

		public static create(): IResult<Aggregate<any>, string> {
			return Result.success(new Agg('hello'));
		}
	};

	class Ent extends Entity<any>{
		private constructor(props: any) {
			super(props)
		}

		public static create(): IResult<Entity<any>, string> {
			return Result.success(new Ent('hello'));
		}
	};

	class Vo extends ValueObject<any>{
		private constructor(props: any) {
			super(props)
		}

		public static create(): IResult<ValueObject<any>, string> {
			return Result.success(new Vo('hello'));
		}
	};

	describe('string', () => {

		it('should return true if is string', () => {
			const result = checker.isString("lorem ipsum");
			expect(result).toBeTruthy();
		});

		it('should return false if is id', () => {
			const result = checker.isString(ID.create());
			expect(result).toBeFalsy();
		});

		it('should return false if is object', () => {
			const result = checker.isString({});
			expect(result).toBeFalsy();
		});

		it('should return false if is Date', () => {
			const result = checker.isString(new Date());
			expect(result).toBeFalsy();
		});

		it('should return false if is Array', () => {
			const result = checker.isString([]);
			expect(result).toBeFalsy();
		});

		it('should return false if is Number', () => {
			const result = checker.isString(10);
			expect(result).toBeFalsy();
		});

		it('should return false if is Null', () => {
			const result = checker.isString(null);
			expect(result).toBeFalsy();
		});

		it('should return false if is Undefined', () => {
			const result = checker.isString(undefined);
			expect(result).toBeFalsy();
		});

		it('should return false if is Boolean', () => {
			const result = checker.isString(true);
			expect(result).toBeFalsy();
		});

		it('should return false if is function', () => {
			const result = checker.isString(() => console.log('ok'));
			expect(result).toBeFalsy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isString(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return false if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isString(agg.value());
			expect(result).toBeFalsy();
		});
		
		it('should return false if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isString(vo.value());
			expect(result).toBeFalsy();
		});

		it('should return false if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isString(ent.value());
			expect(result).toBeFalsy();
		});
	});


	describe('valueObject', () => {

		it('should return false if is string', () => {
			const result = checker.isValueObject("lorem ipsum");
			expect(result).toBeFalsy();
		});

		it('should return false if is id', () => {
			const result = checker.isValueObject(ID.create());
			expect(result).toBeFalsy();
		});

		it('should return false if is object', () => {
			const result = checker.isValueObject({});
			expect(result).toBeFalsy();
		});

		it('should return false if is Date', () => {
			const result = checker.isValueObject(new Date());
			expect(result).toBeFalsy();
		});

		it('should return false if is Array', () => {
			const result = checker.isValueObject([]);
			expect(result).toBeFalsy();
		});

		it('should return false if is Number', () => {
			const result = checker.isValueObject(10);
			expect(result).toBeFalsy();
		});

		it('should return false if is Null', () => {
			const result = checker.isValueObject(null);
			expect(result).toBeFalsy();
		});

		it('should return false if is Undefined', () => {
			const result = checker.isValueObject(undefined);
			expect(result).toBeFalsy();
		});

		it('should return false if is Boolean', () => {
			const result = checker.isValueObject(true);
			expect(result).toBeFalsy();
		});

		it('should return false if is function', () => {
			const result = checker.isValueObject(() => console.log('ok'));
			expect(result).toBeFalsy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isValueObject(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return false if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isValueObject(agg.value());
			expect(result).toBeFalsy();
		});
		
		it('should return true if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isValueObject(vo.value());
			expect(result).toBeTruthy();
		});

		it('should return false if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isValueObject(ent.value());
			expect(result).toBeFalsy();
		});
	});


	describe('entity', () => {

		it('should return false if is string', () => {
			const result = checker.isEntity("lorem ipsum");
			expect(result).toBeFalsy();
		});

		it('should return false if is id', () => {
			const result = checker.isEntity(ID.create());
			expect(result).toBeFalsy();
		});

		it('should return false if is object', () => {
			const result = checker.isEntity({});
			expect(result).toBeFalsy();
		});

		it('should return false if is Date', () => {
			const result = checker.isEntity(new Date());
			expect(result).toBeFalsy();
		});

		it('should return false if is Array', () => {
			const result = checker.isEntity([]);
			expect(result).toBeFalsy();
		});

		it('should return false if is Number', () => {
			const result = checker.isEntity(10);
			expect(result).toBeFalsy();
		});

		it('should return false if is Null', () => {
			const result = checker.isEntity(null);
			expect(result).toBeFalsy();
		});

		it('should return false if is Undefined', () => {
			const result = checker.isEntity(undefined);
			expect(result).toBeFalsy();
		});

		it('should return false if is Boolean', () => {
			const result = checker.isEntity(true);
			expect(result).toBeFalsy();
		});

		it('should return false if is function', () => {
			const result = checker.isEntity(() => console.log('ok'));
			expect(result).toBeFalsy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isEntity(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return false if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isEntity(agg.value());
			expect(result).toBeFalsy();
		});
		
		it('should return false if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isEntity(vo.value());
			expect(result).toBeFalsy();
		});

		it('should return true if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isEntity(ent.value());
			expect(result).toBeTruthy();
		});
	});

	describe('aggregate', () => {

		it('should return false if is string', () => {
			const result = checker.isAggregate("lorem ipsum");
			expect(result).toBeFalsy();
		});

		it('should return false if is id', () => {
			const result = checker.isAggregate(ID.create());
			expect(result).toBeFalsy();
		});

		it('should return false if is object', () => {
			const result = checker.isAggregate({});
			expect(result).toBeFalsy();
		});

		it('should return false if is Date', () => {
			const result = checker.isAggregate(new Date());
			expect(result).toBeFalsy();
		});

		it('should return false if is Array', () => {
			const result = checker.isAggregate([]);
			expect(result).toBeFalsy();
		});

		it('should return false if is Number', () => {
			const result = checker.isAggregate(10);
			expect(result).toBeFalsy();
		});

		it('should return false if is Null', () => {
			const result = checker.isAggregate(null);
			expect(result).toBeFalsy();
		});

		it('should return false if is Undefined', () => {
			const result = checker.isAggregate(undefined);
			expect(result).toBeFalsy();
		});

		it('should return false if is Boolean', () => {
			const result = checker.isAggregate(true);
			expect(result).toBeFalsy();
		});

		it('should return false if is function', () => {
			const result = checker.isAggregate(() => console.log('ok'));
			expect(result).toBeFalsy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isAggregate(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return true if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isAggregate(agg.value());
			expect(result).toBeTruthy();
		});
		
		it('should return false if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isAggregate(vo.value());
			expect(result).toBeFalsy();
		});

		it('should return false if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isAggregate(ent.value());
			expect(result).toBeFalsy();
		});
	});

	describe('array', () => {

		it('should return false if is string', () => {
			const result = checker.isArray("lorem ipsum");
			expect(result).toBeFalsy();
		});

		it('should return false if is id', () => {
			const result = checker.isArray(ID.create());
			expect(result).toBeFalsy();
		});

		it('should return false if is object', () => {
			const result = checker.isArray({});
			expect(result).toBeFalsy();
		});

		it('should return false if is Date', () => {
			const result = checker.isArray(new Date());
			expect(result).toBeFalsy();
		});

		it('should return true if is Array', () => {
			const result = checker.isArray(['1', '2']);
			expect(result).toBeTruthy();
		});

		it('should return false if is Number', () => {
			const result = checker.isArray(10);
			expect(result).toBeFalsy();
		});

		it('should return false if is Null', () => {
			const result = checker.isArray(null);
			expect(result).toBeFalsy();
		});

		it('should return false if is Undefined', () => {
			const result = checker.isArray(undefined);
			expect(result).toBeFalsy();
		});

		it('should return false if is Boolean', () => {
			const result = checker.isArray(true);
			expect(result).toBeFalsy();
		});

		it('should return false if is function', () => {
			const result = checker.isArray(() => console.log('ok'));
			expect(result).toBeFalsy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isArray(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return false if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isArray(agg.value());
			expect(result).toBeFalsy();
		});
		
		it('should return false if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isArray(vo.value());
			expect(result).toBeFalsy();
		});

		it('should return false if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isArray(ent.value());
			expect(result).toBeFalsy();
		});
	});

	describe('boolean', () => {

		it('should return false if is string', () => {
			const result = checker.isBoolean("lorem ipsum");
			expect(result).toBeFalsy();
		});

		it('should return false if is id', () => {
			const result = checker.isBoolean(ID.create());
			expect(result).toBeFalsy();
		});

		it('should return false if is object', () => {
			const result = checker.isBoolean({});
			expect(result).toBeFalsy();
		});

		it('should return false if is Date', () => {
			const result = checker.isBoolean(new Date());
			expect(result).toBeFalsy();
		});

		it('should return false if is Array', () => {
			const result = checker.isBoolean(['1', '2']);
			expect(result).toBeFalsy();
		});

		it('should return false if is Number', () => {
			const result = checker.isBoolean(10);
			expect(result).toBeFalsy();
		});

		it('should return false if is Null', () => {
			const result = checker.isBoolean(null);
			expect(result).toBeFalsy();
		});

		it('should return false if is Undefined', () => {
			const result = checker.isBoolean(undefined);
			expect(result).toBeFalsy();
		});

		it('should return true if is Boolean', () => {
			const result = checker.isBoolean(true);
			expect(result).toBeTruthy();
		});

		it('should return false if is function', () => {
			const result = checker.isBoolean(() => console.log('ok'));
			expect(result).toBeFalsy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isBoolean(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return false if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isBoolean(agg.value());
			expect(result).toBeFalsy();
		});
		
		it('should return false if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isBoolean(vo.value());
			expect(result).toBeFalsy();
		});

		it('should return false if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isBoolean(ent.value());
			expect(result).toBeFalsy();
		});
	});


	describe('number', () => {

		it('should return false if is string', () => {
			const result = checker.isNumber("lorem ipsum");
			expect(result).toBeFalsy();
		});

		it('should return false if is id', () => {
			const result = checker.isNumber(ID.create());
			expect(result).toBeFalsy();
		});

		it('should return false if is object', () => {
			const result = checker.isNumber({});
			expect(result).toBeFalsy();
		});

		it('should return false if is Date', () => {
			const result = checker.isNumber(new Date());
			expect(result).toBeFalsy();
		});

		it('should return false if is Array', () => {
			const result = checker.isNumber(['1', '2']);
			expect(result).toBeFalsy();
		});

		it('should return true if is Number', () => {
			const result = checker.isNumber(10);
			expect(result).toBeTruthy();
		});

		it('should return false if is Null', () => {
			const result = checker.isNumber(null);
			expect(result).toBeFalsy();
		});

		it('should return false if is Undefined', () => {
			const result = checker.isNumber(undefined);
			expect(result).toBeFalsy();
		});

		it('should return false if is Boolean', () => {
			const result = checker.isNumber(true);
			expect(result).toBeFalsy();
		});

		it('should return false if is function', () => {
			const result = checker.isNumber(() => console.log('ok'));
			expect(result).toBeFalsy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isNumber(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return false if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isNumber(agg.value());
			expect(result).toBeFalsy();
		});
		
		it('should return false if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isNumber(vo.value());
			expect(result).toBeFalsy();
		});

		it('should return false if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isNumber(ent.value());
			expect(result).toBeFalsy();
		});
	});

	describe('date', () => {

		it('should return false if is string', () => {
			const result = checker.isDate("lorem ipsum");
			expect(result).toBeFalsy();
		});

		it('should return false if is id', () => {
			const result = checker.isDate(ID.create());
			expect(result).toBeFalsy();
		});

		it('should return false if is object', () => {
			const result = checker.isDate({});
			expect(result).toBeFalsy();
		});

		it('should return true if is Date', () => {
			const result = checker.isDate(new Date());
			expect(result).toBeTruthy();
		});

		it('should return false if is Array', () => {
			const result = checker.isDate(['1', '2']);
			expect(result).toBeFalsy();
		});

		it('should return false if is Number', () => {
			const result = checker.isDate(10);
			expect(result).toBeFalsy();
		});

		it('should return false if is Null', () => {
			const result = checker.isDate(null);
			expect(result).toBeFalsy();
		});

		it('should return false if is Undefined', () => {
			const result = checker.isDate(undefined);
			expect(result).toBeFalsy();
		});

		it('should return false if is Boolean', () => {
			const result = checker.isDate(true);
			expect(result).toBeFalsy();
		});

		it('should return false if is function', () => {
			const result = checker.isDate(() => console.log('ok'));
			expect(result).toBeFalsy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isDate(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return false if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isDate(agg.value());
			expect(result).toBeFalsy();
		});
		
		it('should return false if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isDate(vo.value());
			expect(result).toBeFalsy();
		});

		it('should return false if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isDate(ent.value());
			expect(result).toBeFalsy();
		});
	});


	describe('null', () => {

		it('should return false if is string', () => {
			const result = checker.isNull("lorem ipsum");
			expect(result).toBeFalsy();
		});

		it('should return false if is id', () => {
			const result = checker.isNull(ID.create());
			expect(result).toBeFalsy();
		});

		it('should return false if is object', () => {
			const result = checker.isNull({});
			expect(result).toBeFalsy();
		});

		it('should return false if is Date', () => {
			const result = checker.isNull(new Date());
			expect(result).toBeFalsy();
		});

		it('should return false if is Array', () => {
			const result = checker.isNull(['1', '2']);
			expect(result).toBeFalsy();
		});

		it('should return false if is Number', () => {
			const result = checker.isNull(10);
			expect(result).toBeFalsy();
		});

		it('should return true if is Null', () => {
			const result = checker.isNull(null);
			expect(result).toBeTruthy();
		});

		it('should return false if is Undefined', () => {
			const result = checker.isNull(undefined);
			expect(result).toBeFalsy();
		});

		it('should return false if is Boolean', () => {
			const result = checker.isNull(true);
			expect(result).toBeFalsy();
		});

		it('should return false if is function', () => {
			const result = checker.isNull(() => console.log('ok'));
			expect(result).toBeFalsy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isNull(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return false if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isNull(agg.value());
			expect(result).toBeFalsy();
		});
		
		it('should return false if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isNull(vo.value());
			expect(result).toBeFalsy();
		});

		it('should return false if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isNull(ent.value());
			expect(result).toBeFalsy();
		});
	});


	describe('undefined', () => {

		it('should return false if is string', () => {
			const result = checker.isUndefined("lorem ipsum");
			expect(result).toBeFalsy();
		});

		it('should return false if is id', () => {
			const result = checker.isUndefined(ID.create());
			expect(result).toBeFalsy();
		});

		it('should return false if is object', () => {
			const result = checker.isUndefined({});
			expect(result).toBeFalsy();
		});

		it('should return false if is Date', () => {
			const result = checker.isUndefined(new Date());
			expect(result).toBeFalsy();
		});

		it('should return false if is Array', () => {
			const result = checker.isUndefined(['1', '2']);
			expect(result).toBeFalsy();
		});

		it('should return false if is Number', () => {
			const result = checker.isUndefined(10);
			expect(result).toBeFalsy();
		});

		it('should return false if is Null', () => {
			const result = checker.isUndefined(null);
			expect(result).toBeFalsy();
		});

		it('should return true if is Undefined', () => {
			const result = checker.isUndefined(undefined);
			expect(result).toBeTruthy();
		});

		it('should return false if is Boolean', () => {
			const result = checker.isUndefined(true);
			expect(result).toBeFalsy();
		});

		it('should return false if is function', () => {
			const result = checker.isUndefined(() => console.log('ok'));
			expect(result).toBeFalsy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isUndefined(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return false if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isUndefined(agg.value());
			expect(result).toBeFalsy();
		});
		
		it('should return false if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isUndefined(vo.value());
			expect(result).toBeFalsy();
		});

		it('should return false if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isUndefined(ent.value());
			expect(result).toBeFalsy();
		});
	});


	describe('function', () => {

		it('should return false if is string', () => {
			const result = checker.isFunction("lorem ipsum");
			expect(result).toBeFalsy();
		});

		it('should return false if is id', () => {
			const result = checker.isFunction(ID.create());
			expect(result).toBeFalsy();
		});

		it('should return false if is object', () => {
			const result = checker.isFunction({});
			expect(result).toBeFalsy();
		});

		it('should return false if is Date', () => {
			const result = checker.isFunction(new Date());
			expect(result).toBeFalsy();
		});

		it('should return false if is Array', () => {
			const result = checker.isFunction(['1', '2']);
			expect(result).toBeFalsy();
		});

		it('should return false if is Number', () => {
			const result = checker.isFunction(10);
			expect(result).toBeFalsy();
		});

		it('should return false if is Null', () => {
			const result = checker.isFunction(null);
			expect(result).toBeFalsy();
		});

		it('should return false if is Undefined', () => {
			const result = checker.isFunction(undefined);
			expect(result).toBeFalsy();
		});

		it('should return false if is Boolean', () => {
			const result = checker.isFunction(true);
			expect(result).toBeFalsy();
		});

		it('should return true if is function', () => {
			const result = checker.isFunction(() => console.log('ok'));
			expect(result).toBeTruthy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isFunction(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return false if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isFunction(agg.value());
			expect(result).toBeFalsy();
		});
		
		it('should return false if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isFunction(vo.value());
			expect(result).toBeFalsy();
		});

		it('should return false if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isFunction(ent.value());
			expect(result).toBeFalsy();
		});
	});

	describe('object', () => {

		it('should return false if is string', () => {
			const result = checker.isObject("lorem ipsum");
			expect(result).toBeFalsy();
		});

		it('should return false if is id', () => {
			const result = checker.isObject(ID.create());
			expect(result).toBeFalsy();
		});

		it('should return true if is object', () => {
			const result = checker.isObject({ a: 'hello' });
			expect(result).toBeTruthy();
			expect(checker.isObject({})).toBeTruthy();
		});

		it('should return false if is Date', () => {
			const result = checker.isObject(new Date());
			expect(result).toBeFalsy();
		});

		it('should return false if is Array', () => {
			const result = checker.isObject(['1', '2']);
			expect(result).toBeFalsy();
		});

		it('should return false if is Number', () => {
			const result = checker.isObject(10);
			expect(result).toBeFalsy();
		});

		it('should return false if is Null', () => {
			const result = checker.isObject(null);
			expect(result).toBeFalsy();
		});

		it('should return false if is Undefined', () => {
			const result = checker.isObject(undefined);
			expect(result).toBeFalsy();
		});

		it('should return false if is Boolean', () => {
			const result = checker.isObject(true);
			expect(result).toBeFalsy();
		});

		it('should return false if is function', () => {
			const result = checker.isObject(() => console.log('ok'));
			expect(result).toBeFalsy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isObject(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return false if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isObject(agg.value());
			expect(result).toBeFalsy();
		});
		
		it('should return false if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isObject(vo.value());
			expect(result).toBeFalsy();
		});

		it('should return false if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isObject(ent.value());
			expect(result).toBeFalsy();
		});
	});


	describe('id', () => {

		it('should return false if is string', () => {
			const result = checker.isID("lorem ipsum");
			expect(result).toBeFalsy();
		});

		it('should return true if is id', () => {
			const result = checker.isID(ID.create());
			expect(result).toBeTruthy();
		});

		it('should return false if is object', () => {
			const result = checker.isID({ a: 'hello' });
			expect(result).toBeFalsy();
			expect(checker.isID({})).toBeFalsy();
		});

		it('should return false if is Date', () => {
			const result = checker.isID(new Date());
			expect(result).toBeFalsy();
		});

		it('should return false if is Array', () => {
			const result = checker.isID(['1', '2']);
			expect(result).toBeFalsy();
		});

		it('should return false if is Number', () => {
			const result = checker.isID(10);
			expect(result).toBeFalsy();
		});

		it('should return false if is Null', () => {
			const result = checker.isID(null);
			expect(result).toBeFalsy();
		});

		it('should return false if is Undefined', () => {
			const result = checker.isID(undefined);
			expect(result).toBeFalsy();
		});

		it('should return false if is Boolean', () => {
			const result = checker.isID(true);
			expect(result).toBeFalsy();
		});

		it('should return false if is function', () => {
			const result = checker.isID(() => console.log('ok'));
			expect(result).toBeFalsy();
		});

		it('should return false if is symbol', () => {
			const result = checker.isID(Symbol('hello'));
			expect(result).toBeFalsy();
		});

		it('should return false if is Aggregate', () => {
			const agg = Agg.create();
			const result = checker.isID(agg.value());
			expect(result).toBeFalsy();
		});
		
		it('should return false if is ValueObject', () => {
			const vo = Vo.create();
			const result = checker.isID(vo.value());
			expect(result).toBeFalsy();
		});

		it('should return false if is Entity', () => {
			const ent = Ent.create();
			const result = checker.isID(ent.value());
			expect(result).toBeFalsy();
		});
	});
});
