USE VETERINARIO
GO

SELECT * FROM clinica;
GO

SELECT * FROM usuario;
GO

SELECT * FROM medico;
GO

SELECT * FROM paciente;
GO

SELECT * FROM consulta;
GO

--Criou uma fun��o para retornar a quantidade de m�dicos de uma determinada especialidade
SELECT COUNT(IdMedico)
FROM Medico
WHERE IdEspecialidade = 17
GO
