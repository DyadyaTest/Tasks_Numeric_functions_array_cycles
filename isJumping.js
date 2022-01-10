// Реализуй функцию isJumping, которая принимает число number и возвращает 
// строку JUMPING, если каждая цифра в числе отличается от соседней на 1. 
// Если условие не выполняется - строку NOT JUMPING.

// Примечания:

// Входное число всегда положительное
// Разница между 9 и 0 не является 1
// Все числа, которые состоят из одной цифры - JUMPING

isJumping(26454);

function isJumping(number) {
    let str = number.toString();
    for (let i = 0; i <= str.length -2; i++) {
        let a = (str[i]);
        a = parseInt(a);
        a += 1;
        let b = str[i+1];
        b = parseInt(b);
        if (a !== b) { 
            if (a-2 !== b) { 
                console.log('NOT JUMPING');
                return ('NOT JUMPING');
            };
        };
    }
    console.log('JUMPING');
    return ('JUMPING');
  }