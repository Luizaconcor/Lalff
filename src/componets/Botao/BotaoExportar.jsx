import React from 'react';
import {App, AppBody, Button} from "./styleBotaoExportar"

function BotaoE() {

  return (
    <App> 
      <AppBody>
        <Button>
          Extrair PDF 
        </Button>
        <Button>
          Extrair CSV
        </Button>
        <Button>
          Extrair PNG
        </Button>
      </AppBody>
    </App>
  );
}

export default BotaoE;