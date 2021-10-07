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

--Criou uma função para retornar a quantidade de médicos de uma determinada especialidade
SELECT COUNT(IdMedico)
FROM Medico
WHERE IdEspecialidade = 17
GO
