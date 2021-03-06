package com.rn_arch_demo.bridges.QrReader

import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.zxing.integration.android.IntentIntegrator
import org.greenrobot.eventbus.EventBus
import org.greenrobot.eventbus.Subscribe
import org.greenrobot.eventbus.ThreadMode
import javax.annotation.Nonnull


class QrReader(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext!!) {
    private var callback: Callback? = null

    @Nonnull
    override fun getName(): String {
        return "QrReaderAndroid"
    }

    @ReactMethod
    fun startScan(callback: Callback) {
        this.callback = callback
        if (!EventBus.getDefault().isRegistered(this)) {
            EventBus.getDefault().register(this)
        }

        IntentIntegrator(currentActivity)
                .setCaptureActivity(ScanActivity::class.java)
                .setDesiredBarcodeFormats(IntentIntegrator.ALL_CODE_TYPES)
                .setPrompt("Scan a barcode")
                .setBarcodeImageEnabled(false)
                .setBeepEnabled(false)
                .initiateScan()
    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    fun onQrRead(event: QrEvent) {
        if (event.qrContent != null) {
            callback!!.invoke(null, event.qrContent)
        } else {
            callback!!.invoke("There was an error while reading the code", null)
        }
        EventBus.getDefault().unregister(this)
    }

}
