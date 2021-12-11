from flask import *
import psycopg2

sqlURl = "postgres://eruekbxp:i9B51GCEVxNd6mG_qmHujbS8IbBCnH-v@kashin.db.elephantsql.com/eruekbxp"

class Blood:
    name = ""
    blood = ""
    address = ""
    phone_no = ""

    def __init__(self,n,b,a,ph):
        self.name=n
        self.address = a
        self.blood = b
        self.phone_no = ph

        connection = psycopg2.connect(sqlURl)
        try:
            with connection:
                with connection.cursor() as cursor:
                    cursor.execute(
                        "CREATE TABLE BLOOD(NAME VARCHAR(20), ADDRESS VARCHAR(50), PHONE_NUM VARCHAR(20), BLOODGROUP VARCHAR(5) )")
                with connection.cursor() as cursor:
                    cursor.execute("INSERT INTO BLOOD VALUES(%s, %s, %s, %s);", (self.name, self.address, self.phone_no, self.blood))

        except:
            pass
class Signup:
    name = ""
    password = ""
    email = ""

    def __init__(self,n,p,e):
        self.name=n
        self.password = p
        self.email = e

        connection = psycopg2.connect(sqlURl)
        try:
            with connection:
                with connection.cursor() as cursor:
                    cursor.execute(
                        "CREATE TABLE USER_SIGNUP(USERNAME VARCHAR(20), EMAIL VARCHAR(50), PASSWORD VARCHAR(20))")
                with connection.cursor() as cursor:
                    cursor.execute("INSERT INTO USER_SIGNUP VALUES(%s, %s, %s, %s);", (self.name, self.email, self.password))

        except:
            print("error")

class Oxygen:
    name = ""
    number = ""
    address = ""
    phone_no = ""

    def __init__(self,n,num,a,ph):
        self.name=n
        self.address = a
        self.number = num
        self.phone_no = ph
        connection = psycopg2.connect(sqlURl)
        try:
            with connection:
                with connection.cursor() as cursor:
                    cursor.execute(
                        "CREATE TABLE OXYGEN(NAME VARCHAR(20), ADDRESS VARCHAR(50), PHONE_NUM VARCHAR(20), NUMBER VARCHAR(5) )")
                with connection.cursor() as cursor:
                    cursor.execute("INSERT INTO OXYGEN VALUES(%s, %s, %s, %s);", (self.name, self.address, self.phone_no, self.number))

        except:
            pass

class Medicines:
    name = ""
    quant = ""
    address = ""
    phone_no = ""

    def __init__(self,n,num,a,ph):
        self.name=n
        self.address = a
        self.quant = num
        self.phone_no = ph
        connection = psycopg2.connect(sqlURl)
        try:
            with connection:
                with connection.cursor() as cursor:
                    cursor.execute(
                        "CREATE TABLE MEDICINE(MEDICINENAME VARCHAR(20), ADDRESS VARCHAR(50), PHONE_NUM VARCHAR(20), QUANTITY VARCHAR(5));")
                with connection.cursor() as cursor:
                    cursor.execute("INSERT INTO MEDICINE VALUES(%s, %s, %s, %s);", (self.name, self.address, self.phone_no, self.quant))

        except:
            pass

def fetch():
        connection = psycopg2.connect(sqlURl)
        with connection:
            with connection.cursor() as cursor:
                cursor.execute("SELECT * FROM USER_SIGNUP;")
                values = cursor.fetchall()
                print(values)

