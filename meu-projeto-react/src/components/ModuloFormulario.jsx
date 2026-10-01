import { useForm } from "react-hook-form";

export function ModuloFormulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (dados) => {
    alert(
      'Formulario Enviado com Sucesso!\n' +
      `Nome: ${dados.nome}\n` +
      `Email: ${dados.email}\n` +
      `Telefone: ${dados.telefone}`
    );
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <h2>3. Modulo de Formulario (React Hook Form)</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome: </label>
          <input {...register("nome", { required: "Nome e obrigatorio" })} />
          {errors.nome && <p style={{ color: "red" }}>{errors.nome.message}</p>}
        </div>
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "5px" }}>
          <h3>Endereco</h3>
          <div>
            <label>CEP: </label>
            <input type="text" placeholder="00000-000" {...register("cep", { required: "CEP e obrigatorio" })} />
            {errors.cep && <p style={{ color: "red" }}>{errors.cep.message}</p>}
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Rua: </label>
            <input type="text" placeholder="Nome da rua" {...register("rua", { required: "Rua e obrigatoria" })} />
            {errors.rua && <p style={{ color: "red" }}>{errors.rua.message}</p>}
          </div>
          <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
            <div>
              <label>Numero: </label>
              <input type="text" style={{ width: "80px" }} {...register("numero", { required: "Numero e obrigatorio"})} />
              {errors.numero && <p style={{ color: "red" }}>{errors.numero.message}</p>}
            </div>
            <div>
              <label>Complemento: </label>
              <input type="text" placeholder="Apt, Bloco (Opcional)" {...register("complemento")} />
            </div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Bairro: </label>
            <input type="text" {...register("bairro", { required: "Bairro e obrigatorio" })} />
            {errors.bairro && <p style={{ color: "red" }}>{errors.bairro.message}</p>}
          </div>
          <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
            <div>
              <label>Cidade: </label>
              <input type="text" {...register("cidade", { required: "Cidade e obrigatoria" })} />
              {errors.cidade && <p style={{ color: "red" }}>{errors.cidade.message}</p>}
            </div>
            <div>
              <label>Estado (UF): </label>
              <select {...register("estado", { required: "Selecione o estado"})}>
                <option value="">Selecione...</option>
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
                <option value="MG">MG</option>
                <option value="RS">RS</option>
                <option value="PR">PR</option>
              </select>
              {errors.estado && <p style={{ color: "red" }}>{errors.estado.message}</p>}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Email: </label>
          <input {...register("email", { required: "Email e obrigatorio"})} />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Telefone: </label>
          <input
            type="tel"
            placeholder="(11) 99999-9999"
            {...register("telefone", {
              required: "Telefone e obrigatorio",
              minLength: { value: 8, message: "O telefone deve ter no minimo 8 digitos" },
            })}
          />
          {errors.telefone && <p style={{ color: "red" }}>{errors.telefone.message}</p>}
        </div>
        <button type="submit" style={{ marginTop: "15px" }}>Cadastrar</button>
      </form>
    </div>
  );
}