package com.rn_arch_demo.bridges.UXUtils

import android.content.Intent
import android.net.Uri
import android.provider.Settings
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import javax.annotation.Nonnull


class UXUtils(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext!!) {
    @Nonnull
    override fun getName(): String {
        return "UXUtilsAndroid"
    }

    @ReactMethod
    fun launchSettings() {
        val intent = Intent()
        intent.action = Settings.ACTION_APPLICATION_DETAILS_SETTINGS
        intent.data = Uri.fromParts("package", currentActivity!!.packageName, null)
        currentActivity!!.startActivity(intent)
    }
}