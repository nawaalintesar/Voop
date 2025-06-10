## Compatability
This web application is compatible with both ios and Android devices and is accesible by all search engines by searching up voop.live,please note since the application is hosted for free backend will be extremely slow, we suggest running the application on localhost to interact with all our features. This application is not a mobile application. 
## Pre-Requisites
Ensure that you have Visual Studio Code installed. 
## Select Repository
Clone the repository from github onto your project in visio studio code. Below is the repository to choose:
![image](https://github.com/Team-Telos/Voop/assets/105354913/abeaa661-eb61-4900-a16a-e1b321f6f4b6)
## Branch Selection
Open the project in Visio Studio code and ensure that you are on the 'Main' branch. 
## Project Setup
To run the project you will have to open two terminals, one terminal to initiate the frontend and another to initiate the backend.

**Terminal 1**
```
cd backend
npm install #NOTE:Runing this command is essential to make sure all the necessary files needed to run the project are installed. 
npm run dev 
Incase of an error after installing the files run the below commands:
npm install nodemon
npm install dotenv
```
**Terminal 2**
```
cd frontend
npm install #NOTE:Runing this command is essential to make sure all the necessary files needed to run the project are installed. 
npm start
```
After completing the above,the web application should open in your search engine!
# User Manual

## 1. Home Page 
https://github.com/Team-Telos/Voop/assets/105354913/9fe2526b-50b4-43b9-a76a-7b86afd25866

Through the home page the user can view the code editor page and generate a diagram when the click the objectify button, however to change their code,add their own code and make changes in the diagram they will have to login or signup. 


## 2. Login and Sign Up
https://github.com/Team-Telos/Voop/assets/105354913/d24b5f6f-a976-4e48-9f59-8b50c2a4cda2

If you already have a account you can Log in or if you are are new to voop you can Sign in either by filling up the Sign in Form or by signing in from your gmail account. 

## 3. Dashboard 
https://github.com/Team-Telos/Voop/assets/105354913/5739aec6-5d45-4987-bb8f-e7fd1ce71919

The dashboard page is the first page that the users see when they login,on this page they can see their recent projects as well as their ongoing tutorials and access these from here. They can even add a new project from this page by clicking the '+'. The dashboard is the first icon in our side menu. 

## 4.Tutorial Page
https://github.com/Team-Telos/Voop/assets/105354913/14e77191-9f64-48ca-9c86-e1180c4232c4

The tutorial page is the second icon in our side menu, this page shows the user their tutorials which they have enrolled in as well as other tutorials available for them to enrol in. Each tutorial has three levels Level 1 - Level 3 advancing from begginer to advanced. When the user accesses a tutorial, they will see a predefined code for them to learn from. They can see the diagram of the code by clicking the objectify button and alone with that they can also see an explanation that will explain the concepts that the code is teaching them. Since this is a tuorial users CANNOT add or delete files, add/delete classes and make any modification to the code or diagram. 

*Enrol in a tutorial:*

https://github.com/Team-Telos/Voop/assets/105354913/844290e6-2a75-401e-b88f-ca4c249db22a



## 5. Projects Page 
https://github.com/Team-Telos/Voop/assets/105354913/cc2e0e91-a962-4027-a7d1-16bcf2d935ed

The Projects page is the third icon in our side menu, the users can add and delete projects from this page. When a user adds a new project, they can input their own code and a diagram and explanation based on their code is generated when they click the objectify button. Users can even add a class, delete or add other features such as attributes, methods from their diagram and the changes will be reflected real time in their code. Incase the user does not know what to add, they can click the '+' icon to generate AI recommendations that will recommend what they add in their code or they can click the '-' icon to generate AI recommendations that will recommend what they can remove from their code.Users can also add new files into their project. Users can also Undo their changes and Save their projects by clicking the respective buttons. 

*Below is a piece of code that you can use when creating a new project to test:*
```
// Interface representing a shape
interface Shape {
    double calculateArea();
    double calculatePerimeter();
}

// Abstract class representing a 2D shape
abstract class TwoDimensionalShape implements Shape {
    // Common properties for 2D shapes
    protected double width;
    protected double height;

    // Constructor
    public TwoDimensionalShape(double width, double height) {
        this.width = width;
        this.height = height;
    }
}

// Concrete class representing a rectangle
class Rectangle extends TwoDimensionalShape {
    // Constructor
    public Rectangle(double width, double height) {
        super(width, height);
    }

    // Implementing interface methods
    @Override
    public double calculateArea() {
        return width * height;
    }

    @Override
    public double calculatePerimeter() {
        return 2 * (width + height);
    }
}

// Concrete class representing a circle
class Circle implements Shape {
    // Encapsulation: radius is a private field
    private double radius;

    // Constructor
    public Circle(double radius) {
        this.radius = radius;
    }

    // Implementing interface methods
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
}

// Concrete class representing a square
class Square extends TwoDimensionalShape {
    // Constructor
    public Square(double side) {
        super(side, side);
    }

    // Implementing interface methods
    @Override
    public double calculateArea() {
        return width * width;
    }

    @Override
    public double calculatePerimeter() {
        return 4 * width;
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating instances of different shapes
        Rectangle rectangle = new Rectangle(5, 3);
        Circle circle = new Circle(4);
        Square square = new Square(6);

        // Calculating and printing area and perimeter of each shape
        System.out.println("Rectangle - Area: " + rectangle.calculateArea() + ", Perimeter: " + rectangle.calculatePerimeter());
        System.out.println("Circle - Area: " + circle.calculateArea() + ", Perimeter: " + circle.calculatePerimeter());
        System.out.println("Square - Area: " + square.calculateArea() + ", Perimeter: " + square.calculatePerimeter());
    }
}

```

## 6. User Profile and Log out
https://github.com/Team-Telos/Voop/assets/105354913/8f2719ad-7059-4df9-b53f-8694b8cef3a7

The user profile page is the last icon in our side menu, from this page users can view their details as well as update their information from here. If the user wants to delete their account they can do so from here. Once users are done using our website they can log out with ease. 
