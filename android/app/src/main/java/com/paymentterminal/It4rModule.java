package com.paymentterminal;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import br.com.itfast.tectoy.Dispositivo;
import br.com.itfast.tectoy.TecToy;

public class It4rModule extends ReactContextBaseJavaModule {
    private TecToy tecToy;


    It4rModule(ReactApplicationContext context) {
        super(context);
        tecToy = new TecToy(Dispositivo.V2, context);

    }

    @Override
    public String getName() {
        return "It4rModule";
    }

    @ReactMethod
    public void printEvent(String txt) {
        tecToy.imprimir(txt);
    }

}
