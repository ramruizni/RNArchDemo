package com.rn_arch_demo

import android.view.View
import com.facebook.react.uimanager.ViewManager
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.rn_arch_demo.bridges.QrReader.QrReader
import com.rn_arch_demo.bridges.SoundPlayer.SoundPlayer
import com.rn_arch_demo.bridges.UXUtils.UXUtils
import java.util.*
import kotlin.collections.ArrayList


class BridgesPackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        val modules: MutableList<NativeModule> = ArrayList()
        modules.add(QrReader(reactContext))
        modules.add(SoundPlayer(reactContext))
        modules.add(UXUtils(reactContext))
        return modules
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        return Collections.emptyList()
    }
}