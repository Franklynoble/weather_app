package com.niit.tc;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends Activity implements OnItemSelectedListener, OnClickListener {

	EditText et;
	Spinner sp;
	Button btn;
	TextView tv;
	int type = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        et = (EditText) findViewById(R.id.et);
        sp = (Spinner) findViewById(R.id.spinner);
        btn = (Button) findViewById(R.id.btn);
        tv = (TextView) findViewById(R.id.tv);
        
        ArrayAdapter<CharSequence> aa = ArrayAdapter.createFromResource(this, R.array.conversion_type, android.R.layout.simple_spinner_item);
        aa.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        sp.setAdapter(aa);
        sp.setOnItemSelectedListener(this);
        
        btn.setOnClickListener(this);
    }

	@Override
	public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
		type = position;
	}

	@Override
	public void onNothingSelected(AdapterView<?> parent) {
	}

	@Override
	public void onClick(View v) {
		switch (v.getId()) {
		case R.id.btn:
			if(et.getText().length() == 0)
				Toast.makeText(this, "ERROR: Enter a valid number.", Toast.LENGTH_LONG).show();
			else {
				float input = Float.parseFloat(et.getText().toString());
				float result = 0;
				if(type == 0) {
					result = convertCelciusToFahrenheit(input);
					tv.setText(result + " Fahrenheit");
				} else if(type == 1) {
					result = convertFahrenheitToCelcius(input);
					tv.setText(result + " Celsius");
				}
			}
			break;
		default:
			break;
		}
	}
	
	private float convertFahrenheitToCelcius(float fahrenheit) {
		return ((fahrenheit - 32) * 5 / 9);
	}

	
	private float convertCelciusToFahrenheit(float celsius) {
		return ((celsius * 9) / 5) + 32;
	}
}
