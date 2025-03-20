// Array de objetos com informações dos carros
const carros = [
    {
        id: 1,
        nome: "Toyota Corolla XEi",
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2023,
        preco: 145000,
        condicao: "novo",
        link: "cars/toyota-corolla.html",
        imagem: "assets/toyota-corolla-xei/2.png"
    },
    {
        id: 2,
        nome: "Honda Civic EXL",
        marca: "Honda",
        modelo: "Civic",
        ano: 2022,
        preco: 135000,
        condicao: "seminovo",
        link: "cars/honda-civic.html",
        imagem: "assets/honda-civic-exl/1.jpg"
    },
    {
        id: 3,
        nome: "Volkswagen Golf GTI",
        marca: "Volkswagen",
        modelo: "Golf",
        ano: 2021,
        preco: 175000,
        condicao: "seminovo",
        link: "cars/volkswagen-golf.html",
        imagem: "assets/volkswagen-golf-gti/1.png"
    },
    {
        id: 4,
        nome: "BMW 320i",
        marca: "BMW",
        modelo: "Série 3",
        ano: 2023,
        preco: 295000,
        condicao: "novo",
        link: "cars/bmw-320i.html",
        imagem: "assets/bmw-320i/1.png"
    },
    {
        id: 5,
        nome: "Mercedes-Benz C180",
        marca: "Mercedes",
        modelo: "Classe C",
        ano: 2022,
        preco: 285000,
        condicao: "seminovo",
        link: "cars/mercedes-benz-c180.html",
        imagem: "assets/mercedes-benz-c180/1.png"
    },
    {
        id: 6,
        nome: "Ford Ranger XLT",
        marca: "Ford",
        modelo: "Ranger",
        ano: 2024,
        preco: 210000,
        condicao: "novo",
        link: "cars/ford-ranger.html",
        imagem: "assets/ford-ranger-xlt/1.jpg"
    },
    {
        id: 7,
        nome: "Chevrolet Tracker Premier",
        marca: "Chevrolet",
        modelo: "Tracker",
        ano: 2021,
        preco: 120000,
        condicao: "usado",
        link: "cars/chevrolet-tracker-premier.html",
        imagem: "assets/chevrolet-tracker-premier/1.jpg"
    },
    {
        id: 8,
        nome: "Toyota Hilux SRX",
        marca: "Toyota",
        modelo: "Hilux",
        ano: 2023,
        preco: 270000,
        condicao: "seminovo",
        link: "cars/toyota-hilux.html",
        imagem: "assets/toyota-hilux-srx/1.jpg"
    },
    {
        id: 9,
        nome: "Honda HR-V EXL",
        marca: "Honda",
        modelo: "HR-V",
        ano: 2020,
        preco: 115000,
        condicao: "usado",
        link: "cars/honda-hrv.html",
        imagem: "assets/honda-hrv-exl/1.jpg"
    }
];

// Função para formatar preço
function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Função para exibir os carros
function exibirCarros(carrosArray) {
    const carrosContainer = document.getElementById('cars-container');
    if (!carrosContainer) {
        console.error('Elemento cars-container não encontrado!');
        return;
    }
    
    carrosContainer.innerHTML = '';

    if (carrosArray.length === 0) {
        carrosContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Nenhum carro encontrado com os filtros selecionados.</p>';
        return;
    }

    carrosArray.forEach(carro => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <div class="car-image" style="background-image: url('${carro.imagem}')"></div>
            <div class="car-details">
                <h3 class="car-title">${carro.nome}</h3>
                <p class="car-info">Marca: ${carro.marca} | Ano: ${carro.ano}</p>
                <p class="car-info">Condição: ${carro.condicao.charAt(0).toUpperCase() + carro.condicao.slice(1)}</p>
                <p class="car-price">${formatarPreco(carro.preco)}</p>
                <a href="${carro.link}" class="car-btn">Ver Detalhes</a>
            </div>
        `;
        carrosContainer.appendChild(carCard);
    });
}

// Função para popular o select de modelos baseado na marca selecionada
function popularModelos() {
    const selectMarca = document.getElementById('marca');
    const selectModelo = document.getElementById('modelo');
    
    if (!selectMarca || !selectModelo) {
        console.error('Elementos de seleção não encontrados!');
        return;
    }
    
    const marcaSelecionada = selectMarca.value;
    
    // Limpar opções atuais
    selectModelo.innerHTML = '<option value="">Todos</option>';
    
    if (!marcaSelecionada) return;
    
    // Filtrar modelos únicos da marca selecionada
    const modelosUnicos = [...new Set(
        carros
            .filter(carro => carro.marca === marcaSelecionada)
            .map(carro => carro.modelo)
    )];
    
    // Adicionar opções de modelos
    modelosUnicos.forEach(modelo => {
        const option = document.createElement('option');
        option.value = modelo;
        option.textContent = modelo;
        selectModelo.appendChild(option);
    });
}

// Função para aplicar filtros
function aplicarFiltros() {
    const marca = document.getElementById('marca')?.value || '';
    const modelo = document.getElementById('modelo')?.value || '';
    const anoMin = document.getElementById('ano-min')?.value || '';
    const anoMax = document.getElementById('ano-max')?.value || '';
    const precoMin = document.getElementById('preco-min')?.value || '';
    const precoMax = document.getElementById('preco-max')?.value || '';
    const condicao = document.getElementById('condicao')?.value || '';
    
    let carrosFiltrados = [...carros];
    
    // Aplicar filtros
    if (marca) {
        carrosFiltrados = carrosFiltrados.filter(carro => carro.marca === marca);
    }
    
    if (modelo) {
        carrosFiltrados = carrosFiltrados.filter(carro => carro.modelo === modelo);
    }
    
    if (anoMin) {
        carrosFiltrados = carrosFiltrados.filter(carro => carro.ano >= parseInt(anoMin));
    }
    
    if (anoMax) {
        carrosFiltrados = carrosFiltrados.filter(carro => carro.ano <= parseInt(anoMax));
    }
    
    if (precoMin) {
        carrosFiltrados = carrosFiltrados.filter(carro => carro.preco >= parseInt(precoMin));
    }
    
    if (precoMax) {
        carrosFiltrados = carrosFiltrados.filter(carro => carro.preco <= parseInt(precoMax));
    }
    
    if (condicao) {
        carrosFiltrados = carrosFiltrados.filter(carro => carro.condicao === condicao);
    }
    
    exibirCarros(carrosFiltrados);
}

// Função de inicialização
function inicializarCatalogo() {
    // Popular o select de marcas
    const selectMarca = document.getElementById('marca');
    if (selectMarca) {
        // Filtrar marcas únicas
        const marcasUnicas = [...new Set(carros.map(carro => carro.marca))];
        
        // Ordenar alfabeticamente
        marcasUnicas.sort();
        
        // Adicionar opções de marcas
        marcasUnicas.forEach(marca => {
            const option = document.createElement('option');
            option.value = marca;
            option.textContent = marca;
            selectMarca.appendChild(option);
        });
        
        // Adicionar event listener
        selectMarca.addEventListener('change', popularModelos);
    }
    
    // Adicionar event listener ao botão de filtros
    const btnFiltros = document.getElementById('aplicar-filtros');
    if (btnFiltros) {
        btnFiltros.addEventListener('click', aplicarFiltros);
    }
    
    // Exibir todos os carros inicialmente
    exibirCarros(carros);
}

// Inicializar quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', inicializarCatalogo);