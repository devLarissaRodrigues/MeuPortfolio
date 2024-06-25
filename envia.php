<?php
    $nome = addcslashes($_post['nome']);
    $email = addcslashes($_post['email']);
    $telefone = addcslashes($_post['telefone']);
    $mensagem = addcslashes($_post['mensagem']);

    $destinatario = "devlarissarodrigues@gmail.com";
    $assunto = "Coleta de dados - Portfolio";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$telefone;

    $cabecalho = "From: larissamonique@gmail.com"."\n"."Replay-to: ".$email."\n"."X-Mailer:PHP/".phpversion();

    if(mail($destinatario,$assunto,$corpo,$cabecalho)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o e-mail");
    } 
?>