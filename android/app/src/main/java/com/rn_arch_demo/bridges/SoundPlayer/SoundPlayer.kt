package com.rn_arch_demo.bridges.SoundPlayer

import android.media.MediaPlayer
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.rn_arch_demo.R
import javax.annotation.Nonnull


class SoundPlayer(reactContext: ReactApplicationContext?) : ReactContextBaseJavaModule(reactContext!!) {

    private lateinit var player: MediaPlayer

    @Nonnull
    override fun getName(): String {
        return "SoundPlayerAndroid"
    }

    @ReactMethod
    fun play() {
        player = MediaPlayer.create(reactApplicationContext, R.raw.morado)
        player.start()
    }

    @ReactMethod
    fun stop() {
        player.stop()
        player.release()
    }

}
