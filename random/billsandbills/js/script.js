let salario = 0.0;
        let divida = 0.0;
        let total = 0.0;

        let campoSalario = document.getElementById("salario");
        let pSalario = document.getElementById("pSalario");

        let campoDivida = document.getElementById("divida");
        let pDivida = document.getElementById("pDivida");

        let pTotal = document.getElementById("pTotal");

        let sectionDividas = document.getElementById("sectionDividas");

        const usuario = {
            nome: 'admin',
            idade: 5,
            endereco: {
                rua: 'rua admin',
                numero: 182111413914,
            },
        };

        function confirmarSalario() {
            salario = parseFloat(campoSalario.value);
            pSalario.innerHTML = "R$ " + salario;
            total = salario;
            totalTotal();
        }

        function salvaDivida() {
            divida += parseFloat(campoDivida.value);
            pDivida.innerText = "R$ " + divida;
            total -= parseFloat(campoDivida.value);
            totalTotal();
        }


        function totalTotal() {
            if (total == 0) {
                
                if (pTotal.classList.contains("vermeio")){
                    pTotal.classList.remove("vermeio");
                    pTotal.classList.add("azur");
                }
                else if (pTotal.classList.contains("verdios")){
                    pTotal.classList.remove("verdios");
                    pTotal.classList.add("azur");
                }

            }
            else if (total > 0) {
                if (pTotal.classList.contains("azur")){
                    pTotal.classList.remove("azur");
                    pTotal.classList.add("verdios");
                }
                else if (pTotal.classList.contains("vermeio")){
                    pTotal.classList.remove("vermeio");
                    pTotal.classList.add("verdios");
                }
            }
            else {
                if (pTotal.classList.contains("azur")){
                    pTotal.classList.remove("azur");
                    pTotal.classList.add("vermeio");
                }
                else if (pTotal.classList.contains("verdios")){
                    pTotal.classList.remove("verdios");
                    pTotal.classList.add("vermeio");
                }
            }
            pTotal.innerHTML = "R$ " + total;
        }

        function adicionaCampo(){
            sectionDividas.innerHTML += "<article class='container-fluid px-0 d-flex my-2'><article class='input-group'><span class='input-group-text'>R$</span><input class='form-control' type='number' name='divida' id='divida' placeholder='ex: 15' min='0' value='0'></article></article>";
        }

        function debug() {
            console.log("salario: " + salario);
            console.log("divida: " + divida);
            console.log("total: " + total);
        }