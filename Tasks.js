
        // Базовые

        function OneOne() {
            let one = +prompt("Введите первое число")
            let two = +prompt("Введите второе число")
            alert("Умножение чисел " + one + " и " + two + ": " + one * two)
        }

        function OneTwo() {
            let first_name = prompt("Введите имя + пробел")
            let second_name = prompt("Введите фамилию")
            let year = prompt("Введите возвраст")
            alert("Привет " + first_name + second_name + " с возрастом " + year + " лет")
        }

        function OneThree() {
            let number = +prompt("Введите число от 1 до 7 включительно")
            if (number == 1) {
                alert("Воскресенье")
            } if (number == 2) {
                alert("Понедельник")
            } if (number == 3) {
                alert("Вторник")
            } if (number == 4) {
                alert("Среда")
            } if (number == 5) {
                alert("Четверг")
            } if (number == 6) {
                alert("Пятница")
            } if (number == 7) {
                alert("Суббота")
            }
        }

        // Массивы

        // function TwoOne() {
        //     let number_one = +prompt("Введите число")
        //     let number_two = +prompt("Введите число")
        //     let number_three = +prompt("Введите число")
        //     let number_four = +prompt("Введите число")
        //     let number_five = +prompt("Введите число")
        //     let array = [
        //         number_one, 
        //         number_two, 
        //         number_three, 
        //         number_four, 
        //         number_five
        //     ]
        //     // if(
        //     //     number_one/2 & 
        //     //     number_two/2 & 
        //     //     number_three/2 & 
        //     //     number_four/2 & 
        //     //     number_five/2
        //     // ){ alert(true) } else { alert(false) }
        //     // alert(array)

        //     for (let i = 0; i < array.length; i++)

        //     if (array[i] % 2 === 0 ) {
        //         alert(true)
        //     } else {
        //         alert(false)     
        //     }
        // }

        function TwoTwo() {
            let number_one = +prompt("Введите число")
            let number_two = +prompt("Введите число")
            let number_three = +prompt("Введите число")
            let number_four = +prompt("Введите число")
            let number_five = +prompt("Введите число")
            let array = [
                number_one, 
                number_two, 
                number_three, 
                number_four, 
                number_five
            ]
            let new_array = []

            for (let i = 0; i < array.length; i++)
            
            if (array[i] % 5 === 0 ) {
                new_array.push(array[i] % 5 === 0 )
            }

            for (let i = 0; i < new_array.length; i++)
            alert(new_array)

        }

        function TwoThree() {
            
        }

        // Объекты

        function ThreeOne() {
            alert('Представь, что ты босс частной компании')
            let salary_one = +prompt('Какая зарплата у первого сотрудника?')
            let salary_two = +prompt('Какая зарплата у второго сотрудника?')
            let salary_three = +prompt('Какая зарплата у третьего сотрудника?')
            let salaries = {
                John: salary_one,
                Ann: salary_two,
                Pete: salary_three
            }
            let sum = salaries.John + salaries.Pete + salaries.Ann
            alert('Общая сумма: ' + sum)
        }

        function ThreeTwo() {
            
        }

        function ThreeThree() {
            
        }