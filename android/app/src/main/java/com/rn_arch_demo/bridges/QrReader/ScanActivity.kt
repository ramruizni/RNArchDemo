package com.rn_arch_demo.bridges.QrReader

import com.journeyapps.barcodescanner.CaptureActivity


class ScanActivity : CaptureActivity() {

    override fun onBackPressed() {
        intent.putExtra("backPressed", true)
        setResult(100, intent)
        finish()
    }

}
