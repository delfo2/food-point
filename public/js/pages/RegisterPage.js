import dispatchOnStateChange from "../events/onStateChange.js";
import getHeader from "../components/header.js";

const createRegisterForm = () => {
    const bodyRegister = document.createElement('div');
    bodyRegister.classList.add('body-register');

    const headerRegister = getHeader(true, false);
    bodyRegister.appendChild(headerRegister);

    const registerScreen = document.createElement('section');
    registerScreen.id = 'register-screen';
    bodyRegister.appendChild(registerScreen);

    const registerForm = document.createElement('form');
    registerForm.id = 'register-modal';
    registerScreen.appendChild(registerForm);

    const registerFormDiv = document.createElement('div');
    registerFormDiv.id = 'register-form';
    registerForm.appendChild(registerFormDiv);

    const imgLogoDiv = document.createElement('div');
    imgLogoDiv.id = 'img-logo';
    const imgLogo = document.createElement('img');
    imgLogo.src = './assets/icons/main-logo-login.svg';
    imgLogo.alt = 'logo';
    imgLogoDiv.appendChild(imgLogo);
    registerFormDiv.appendChild(imgLogoDiv);

    const registerHeader = document.createElement('h1');
    registerHeader.textContent = 'Cadastrar';
    registerFormDiv.appendChild(registerHeader);

    const registerCompleteSection = document.createElement('section');
    registerCompleteSection.id = 'register-complete';
    registerFormDiv.appendChild(registerCompleteSection);

    const dataRegisterDiv = document.createElement('div');
    dataRegisterDiv.id = 'data-register';
    registerCompleteSection.appendChild(dataRegisterDiv);

    const emailImg = document.createElement('img');
    emailImg.src = './assets/icons/email-symbol.svg';
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.id = "email-register"
    emailInput.type = 'email';
    emailInput.placeholder = 'Digite seu email';
    emailInput.alt = 'Digite seu email';
    dataRegisterDiv.appendChild(emailImg);
    dataRegisterDiv.appendChild(emailLabel);
    dataRegisterDiv.appendChild(emailInput);

    const fullNameImg = document.createElement('img');
    fullNameImg.src = './assets/icons/userLogin.svg';
    const fullNameLabel = document.createElement('label');
    fullNameLabel.textContent = 'Nome completo:';
    const fullNameInput = document.createElement('input');
    fullNameInput.id = "fullName-register"
    fullNameInput.type = 'text';
    fullNameInput.placeholder = 'Digite seu nome';
    fullNameInput.alt = 'Digite seu nome';
    dataRegisterDiv.appendChild(fullNameImg);
    dataRegisterDiv.appendChild(fullNameLabel);
    dataRegisterDiv.appendChild(fullNameInput);

    const passwordImg = document.createElement('img');
    passwordImg.src = './assets/icons/password-symbol.svg';
    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Senha:';
    const passwordInput = document.createElement('input');
    passwordInput.id = "password-register"
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Digite sua senha';
    passwordInput.alt = 'Digite sua senha';
    dataRegisterDiv.appendChild(passwordImg);
    dataRegisterDiv.appendChild(passwordLabel);
    dataRegisterDiv.appendChild(passwordInput);

    const confirmPasswordImg = document.createElement('img');
    confirmPasswordImg.src = './assets/icons/password-symbol.svg';
    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.textContent = 'Confirmar senha:';
    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.id = "confirm-password"
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.placeholder = 'Digite novamente sua senha';
    confirmPasswordInput.alt = 'Digite novamente sua senha';
    dataRegisterDiv.appendChild(confirmPasswordImg);
    dataRegisterDiv.appendChild(confirmPasswordLabel);
    dataRegisterDiv.appendChild(confirmPasswordInput);

    const acceptTermsDiv = document.createElement('div');
    acceptTermsDiv.id = 'acceptTerms';
    registerCompleteSection.appendChild(acceptTermsDiv);

    const acceptAllTermsDiv = document.createElement('div');
    acceptAllTermsDiv.id = 'accept-all-terms';
    acceptTermsDiv.appendChild(acceptAllTermsDiv);

    const acceptTermsInput = document.createElement('input');
    acceptTermsInput.type = 'checkbox';
    acceptTermsInput.id = 'accept-terms-input';
    acceptTermsInput.name = 'accept-terms-input';
    const acceptTermsLabel = document.createElement('label');
    acceptTermsLabel.textContent = 'Eu aceito os termos e condições';
    acceptTermsLabel.setAttribute('for', 'accept-terms-input');
    acceptAllTermsDiv.appendChild(acceptTermsInput);
    acceptAllTermsDiv.appendChild(acceptTermsLabel);

    acceptTermsLabel.addEventListener("click", function () {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeButton = document.createElement('span');
        closeButton.classList.add('close');
        closeButton.textContent = 'X';
        closeButton.addEventListener("click", function () {
            modal.style.display = "none";
        });

        modalContent.appendChild(closeButton);

        const termsContent = `Bem-vindo ao Food Point! Antes de utilizar nosso aplicativo, por favor, leia atentamente estes Termos e Condições. Ao utilizar o Food Point, você concorda com estes termos.
    
            Descrição do Serviço:
            O Food Point é um aplicativo que permite aos usuários descobrir e marcar eventos gastronômicos, como festivais de comida, feiras gastronômicas, degustações e outras atividades relacionadas à gastronomia.
                
            Uso do Aplicativo:
            Você concorda em usar o Food Point apenas para fins legítimos e de acordo com estes Termos e Condições, bem como com todas as leis, regulamentos e códigos aplicáveis.
                
            Cadastro:
            Para utilizar todas as funcionalidades do Food Point, você precisará se cadastrar fornecendo informações precisas e atualizadas. Você é responsável por manter a confidencialidade de suas credenciais de login e por todas as atividades que ocorrerem em sua conta.
                
            Eventos Gastronômicos:
            O Food Point fornece informações sobre eventos gastronômicos, incluindo datas, localização, detalhes do evento e avaliações. No entanto, não nos responsabilizamos por eventuais alterações ou cancelamentos de eventos.
                
            Propriedade Intelectual:
            Todo o conteúdo disponível no Food Point, incluindo texto, imagens, logotipos e marcas registradas, é de propriedade exclusiva do Food Point ou de seus licenciadores. Você concorda em não copiar, modificar, distribuir, transmitir, exibir, publicar, vender ou licenciar qualquer conteúdo do Food Point sem autorização prévia por escrito.
                
            Limitação de Responsabilidade:
            O Food Point não se responsabiliza por danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar o aplicativo.
                
            Modificações nos Termos:
            Reservamo-nos o direito de modificar estes Termos e Condições a qualquer momento, mediante aviso prévio. O uso contínuo do aplicativo após a publicação de alterações constitui aceitação dessas alterações.
                
            Lei Aplicável:
            Estes Termos e Condições serão regidos e interpretados de acordo com as leis do Brasil. Qualquer litígio decorrente ou relacionado a estes Termos e Condições será submetido à jurisdição exclusiva dos tribunais do Brasil.
                
            Ao utilizar o Food Point, você concorda com estes Termos e Condições. Se você tiver alguma dúvida ou preocupação, entre em contato conosco através do nosso suporte ao cliente. Agradecemos por escolher o Food Point!`;

        const termsParagraphs = termsContent.split('\n\n');

        termsParagraphs.forEach(paragraphText => {
            const paragraph = document.createElement('p');
            paragraph.innerHTML = paragraphText.trim().replace(/\n/g, '<br>');
            modalContent.appendChild(paragraph);
        });

        modal.addEventListener('click', function(e){
            if(e.target === modalContent || e.target === modal) {
                modal.style.display = 'none';
            }
        })

        modal.appendChild(modalContent);

        document.body.appendChild(modal);

        modal.style.display = 'block';
    });

    const registerButton = document.createElement('button');
    registerButton.type = 'button';
    registerButton.id = 'registerPage-btn';
    registerButton.alt = 'Cadastrar';
    registerButton.textContent = 'Cadastrar';
    registerButton.disabled = true;
    registerButton.style.backgroundColor = "gray";
    registerButton.style.cursor = "default";
    
    acceptTermsInput.addEventListener('change', function() {
        if (this.checked) {
            registerButton.disabled = false;
            registerButton.style.backgroundColor = '';
            registerButton.style.cursor = ''; 
        } else {
            registerButton.disabled = true;
            registerButton.style.backgroundColor = 'gray';
            registerButton.style.cursor = 'default';
        }
    });

    registerButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("CLICOU EM MIM");
    })
    
    registerFormDiv.appendChild(registerButton);
    
    return bodyRegister;
};

export default createRegisterForm;
