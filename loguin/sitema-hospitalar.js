function validarLogin() {
  const tipo = document.getElementById('tipoUsuario').value;
  const credencial = document.getElementById('credencial').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (!tipo) {
    alert("Por favor, selecione o tipo de usuário.");
    return false;
  }

  if (!credencial || !senha) {
    alert("Preencha todos os campos.");
    return false;
  }

  // Validações específicas
  if (tipo === 'medico') {
    const crmRegex = /^\d{4,6}\/[A-Z]{2}$/;
    if (!crmRegex.test(credencial)) {
      alert("Insira um CRM válido (ex.: 12345/SP).");
      return false;
    }
  } else if (tipo === 'enfermeiro') {
    const corenRegex = /^\d{5,6}$/;
    if (!corenRegex.test(credencial)) {
      alert("Insira um COREN válido (ex.: 123456).");
      return false;
    }
  } else if (tipo === 'recepcao') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (credencial.includes('@') && !emailRegex.test(credencial)) {
      alert("Insira um email válido ou ID.");
      return false;
    }
  }

  // Simulação de redirecionamento
  const mensagens = {
    'medico': 'Redirecionando para o painel médico...',
    'enfermeiro': 'Redirecionando para o painel de enfermagem...',
    'recepcao': 'Redirecionando para o painel de recepção...'
  };
  alert(mensagens[tipo]);
  // Para implementação real, descomente e ajuste:
  // if (tipo === 'medico' || tipo === 'enfermeiro') window.location.href = 'emergencia.html';
  // else if (tipo === 'recepcao') window.location.href = 'administracao.html';
  return false; // Impede o envio real por enquanto
}

function esqueceuSenha() {
  const tipo = document.getElementById('tipoUsuario').value;
  if (!tipo) {
    alert("Selecione um tipo de usuário primeiro.");
  } else {
    alert(`Recuperação de senha para ${tipo} em andamento...`);
  }
}