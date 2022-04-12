package com.pigeonstracker.app;

import android.os.Bundle;

import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import com.getcapacitor.community.facebooklogin.FacebookLogin;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(GoogleAuth.class);
    registerPlugin(FacebookLogin.class);
  }
}
