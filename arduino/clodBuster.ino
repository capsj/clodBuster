//Nuestras variables
int moveUpLeft(String pin);
int moveForward(String pin);
int moveUpRight(String pin);
int moveDownRight(String pin);
int moveBackwards(String pin);
int moveDownLeft(String pin);
int turnRight(String pin);
int turnLeft(String pin);
int stop(String pin);

const int turnPostionPinIN = A2; //VERDER : GND   -- Amarillo: 5V -- Blanco: ref

const int forwardPinOUT = D0;
const int backwardPinOUT = D3;
const int turnLeftPinOUT  = D7;   //DOWN   //naranja
const int turnRightPinOUT = D6;  //UP      //NEGRO 

const int POS_MAX_RIGHT = 650;
const int POS_MIN_LEFT = 310;
const int POS_CENTER = (POS_MAX_RIGHT+POS_MIN_LEFT) / 2;
const int marginalDirection = 30; // Margen al cual si nos acercamos suficiente dejamos de alimentar el servo

const int MAX_SPEED = 250;   //La velocidad va de -255 to 255
const int SPEED_STEP = 50;
int currentSpeed =  0;
int safetyTime = 7000;

/* This function is called once at start up ----------------------------------*/
void setup(){
	pinMode(turnLeftPinOUT,OUTPUT);
	pinMode(turnRightPinOUT,OUTPUT);
    pinMode(forwardPinOUT,OUTPUT);
    pinMode(backwardPinOUT,OUTPUT);
    pinMode(A2, INPUT);
    pinMode(D1, OUTPUT);
    

	//Nuestras funciones
	Particle.function("moveUpLeft", moveUpLeft);
	Particle.function("moveForward", moveForward);
	Particle.function("moveUpRight", moveUpRight);
	Particle.function("downRight", moveDownRight); /*Distinto nombre porque el nombre de la funcion no puede tener*/
	Particle.function("backwards", moveBackwards); /*mas de 12 caracteres.... */
	Particle.function("moveDownLeft", moveDownLeft);
	Particle.function("turnLeft", turnLeft);
	Particle.function("turnRight", turnRight);
	
	//Seteamos todos los pines en low por precaucion
	digitalWrite(turnLeftPinOUT, LOW);
	digitalWrite(turnRightPinOUT, LOW);
	digitalWrite(forwardPinOUT, LOW);
	digitalWrite(backwardPinOUT, LOW);
	digitalWrite(D1, LOW);
}

//mueve la camioneta hacia adelante y a la izquierda.
int moveUpLeft(String pin){
    if(pin == "HIGH" ){ 
    digitalWrite(D1, HIGH);
    digitalWrite(turnRightPinOUT, LOW);
    digitalWrite(turnLeftPinOUT, HIGH);
    analogWrite(forwardPinOUT , 200);
    
    delay(400);
    digitalWrite(turnLeftPinOUT, LOW);
    delay(600);
    digitalWrite(D1, LOW);
    analogWrite(forwardPinOUT, 0);
    
    
    return 1;
    }else {
        offPin();
        return 0;
    }
}

//mueve la camioneta hacia adelante.
int moveForward(String pin){
    if(pin == "HIGH"){
        digitalWrite(D1, HIGH);
	    analogWrite(forwardPinOUT , 200);
        delay(1000);
        digitalWrite(D1, LOW);
        analogWrite(forwardPinOUT, 0);
        
        return 1;
    }
    else if (pin == "LOW"){
        offPin();
        return 0;
    }
    else return -1;
}

//mueve la camioneta hacia adelante y a la derecha.
int moveUpRight(String pin){
    if(pin == "HIGH" ){
        digitalWrite(D1, HIGH);
        digitalWrite(turnLeftPinOUT, LOW);
        digitalWrite(turnRightPinOUT, HIGH);
        analogWrite(forwardPinOUT , 200);
        
        delay(400);
        digitalWrite(turnRightPinOUT, LOW);
        delay(600);
        digitalWrite(D1, LOW);
        analogWrite(forwardPinOUT, 0);

        return 1;
    }else {
        offPin();
        return 0;
    }
}

//mueve la camioneta hacia atras y a la derecha.
int moveDownRight(String pin){
    if(pin == "HIGH" ){ 
        digitalWrite(D1, HIGH);
        digitalWrite(turnRightPinOUT, LOW);
        digitalWrite(turnLeftPinOUT, HIGH);
        analogWrite(backwardPinOUT , 200);
        
        delay(400);
        digitalWrite(turnLeftPinOUT, LOW);
        delay(600);
        digitalWrite(D1, LOW);
        analogWrite(backwardPinOUT, 0);
        
        return 1;
    }else {
        offPin();
        return 0;
    }
}

//mueve la camioneta hacia atras.
int moveBackwards(String pin){
    if(pin == "HIGH"){
        digitalWrite(D1, HIGH);
        analogWrite(backwardPinOUT, 200);
        delay(1000);
        digitalWrite(D1, LOW);
        analogWrite(backwardPinOUT, 0);
        return 1;    
    }else if(pin == "LOW"){
        offPin();
        return 0;
    }
    else return -1;
    
}

//mueve la camioneta hacia atras y a la izquierda.
int moveDownLeft(String pin){
    if(pin == "HIGH" ){
        digitalWrite(D1, HIGH);
        digitalWrite(turnLeftPinOUT, LOW);
        digitalWrite(turnRightPinOUT, HIGH);
        analogWrite(backwardPinOUT , 200);
        
        delay(400);
        digitalWrite(turnRightPinOUT, LOW);
        delay(600);
        digitalWrite(D1, LOW);
        analogWrite(backwardPinOUT, 0);

        return 1;
    }else {
        offPin();
        return 0;
    }
}

int getTurnPosition (int pin) {
	int raw = analogRead( pin );
	int directionServoReading = map ( raw , 310 , 650 ,POS_MIN_LEFT , POS_MAX_RIGHT) ;
	return directionServoReading;
}

void offPin () {
	digitalWrite( turnLeftPinOUT , LOW);
	delay(1);
	digitalWrite( turnRightPinOUT , LOW);
	delay(40);
}

/* Metodos para mover la tracción hacia la derecha -------------------------------*/
int turnRight(String pin){
    if(pin == "HIGH" ){
        digitalWrite(D1, HIGH);
        digitalWrite(turnLeftPinOUT, LOW);
        delay(10);
        digitalWrite(turnRightPinOUT,HIGH);
        delay(50);
        digitalWrite(D1, LOW);
        digitalWrite(turnRightPinOUT,LOW);
        return 1;
    }else{
        offPin();
        return 0;
    } 
    
}

int isRightMost () {
	if ( getTurnPosition ( turnPostionPinIN ) - marginalDirection > POS_MAX_RIGHT ) { //No sabemos si es + o -
	return 1;	
	}
	else {
	return 0;
	}
}
/* Fin metodos para mover la tracción hacia la derecha -------------------------------*/


/* Metodos para mover la tracción hacia la izquierda -------------------------------*/
int turnLeft(String pin){ 
    if(pin == "HIGH" ){
        digitalWrite(D1, HIGH);
        digitalWrite(turnRightPinOUT, LOW);
        delay(10);
        digitalWrite(turnLeftPinOUT, HIGH);
        delay(50);
        digitalWrite(D1, LOW);
        digitalWrite(turnLeftPinOUT, LOW);
        return 1;
    }else {
        offPin();
        return 0;
    }
}

int isLeftMost () {
	if ( getTurnPosition ( turnPostionPinIN ) - marginalDirection < POS_MIN_LEFT ) {
	return 1;	
	}
	else {
	return 0;
	}
}
/* Fin metodos para mover la tracción hacia la izquierda -------------------------------*/