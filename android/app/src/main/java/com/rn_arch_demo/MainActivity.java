package com.rn_arch_demo;

import android.content.Intent;

import com.facebook.react.ReactActivity;
import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;
import com.rn_arch_demo.bridges.QrReader.QrEvent;

import org.greenrobot.eventbus.EventBus;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "rn_arch_demo";
  }

  // Made to work with QrReader
  @Override
  public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    if (data != null && !data.getBooleanExtra("backPressed", false)) {
      IntentResult result = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);
      EventBus.getDefault().post(new QrEvent(result.getContents()));
    }
  }
}
