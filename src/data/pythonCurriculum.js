// Ashok IT — Gen AI & Agentic AI with Python
// https://ashokit.in

const PORTAL = 'https://ashokit.in';
const yt = (url, title, channel = 'freeCodeCamp') => ({ url, title, channel });

const PYTHON_OOP_SECTIONS = [
  {
    id: "what-is-oops",
    title: "What is OOPS?",
    content: "**OOPS = Object Oriented Programming System** — a programming approach where we design software using **classes** and **objects**.\n\nIn real life, everything can be treated as an object:\n- **Student** → name, email, phno, course, fee\n- **Employee** → id, name, salary, project\n- **Bank Account** → account number, balance, branch name, deposit, withdraw\n\nWithout OOP we write many separate variables and functions. If we have 100 students, managing that data becomes difficult. OOP helps us **group related data and functions together**.",
    code: "student_name = \"Ashok\"\nstudent_email = \"ashok@gmail.com\"\nstudent_course = \"Python\"\n\ndef display_student():\n    print(student_name)\n    print(student_email)\n    print(student_course)\n\ndisplay_student()",
  },
  {
    id: "why-oop",
    title: "Why OOP?",
    content: "OOP gives us:\n- **Code re-usability**\n- **Code organization**\n- **Security**\n- **Easy maintenance**\n- **Reduced boilerplate code**\n- The ability to build **large-scale applications**",
  },
  {
    id: "oop-concepts",
    title: "Main Concepts of OOP",
    content: "The core building blocks of OOP in Python are:\n1. **Class**\n2. **Object**\n3. **Constructor**\n4. **Instance Variable**\n5. **Instance Method**\n6. **Encapsulation**\n7. **Inheritance**\n8. **Polymorphism**\n9. **Abstraction**",
  },
  {
    id: "what-is-class",
    title: "What is a Class?",
    content: "A **class** is a blueprint or template — a plan/model to define **properties** and **behaviours**.\n- **Properties** are variables that store data.\n- **Behaviours** are functions that perform actions.\n\nExample — *Student* class: properties `name, email, phno, course`; behaviours `study(), attend_class(), write_exam()`.\n\nSyntax:\n```\nclass ClassName:\n    statements\n```",
    code: "class Student:\n    id = 100\n    name = \"Ashok\"\n\n    def display(self):\n        print(self.name)\n        print(self.id)",
  },
  {
    id: "what-is-object",
    title: "What is an Object?",
    content: "An **object** is a real instance created from a class. Here `s1` is an object of the `Student` class:\n\n`s1 = Student()`",
    code: "class Student:\n    id = 100\n    name = \"Ashok\"\n\n    def display(self):\n        print(self.name)\n        print(self.id)\n\ns1 = Student()\ns1.display()",
  },
  {
    id: "self",
    title: "What is self?",
    content: "**self** is a reference variable that refers to the **current object**. It is used to access variables and methods inside a class.\n\nWhenever we create an object and call a method, Python automatically passes that object as `self`. `self` is not a keyword — it is a standard naming convention.\n\nWhen we call `s1.display()` and `s1.study()`, Python internally passes `s1` as `self`.",
    code: "class Student:\n    id = 100\n    name = \"Ashok\"\n\n    def display(self):\n        print(self.name)\n        print(self.id)\n\n    def study(self):\n        print(self.name, \"Student studying...\")\n\ns1 = Student()\ns1.display()   # display(s1)\ns1.study()     # study(s1)",
  },
  {
    id: "constructor",
    title: "Constructor (__init__)",
    content: "A **constructor** is a special method that is **automatically called when an object is created**. It is used to **initialize object data**. In Python the constructor name is **`__init__()`**.\n\nSyntax:\n```\nclass ClassName:\n    def __init__(self):\n        statements\n```",
    code: "class Student:\n    def __init__(self, name, course):\n        self.name = name\n        self.course = course\n\n    def display(self):\n        print(self.name, \"--\", self.course)\n\ns1 = Student(\"Ashok\", \"Python\")\ns1.display()\n\ns2 = Student(\"John\", \"JAVA\")\ns2.display()\n\ns3 = Student(\"GITA\", \"AI\")\ns3.display()",
  },
  {
    id: "instance-variables",
    title: "Instance Variables",
    content: "Variables declared using the **`self`** keyword are called **instance variables**. They belong to the object, and each object can have separate values.",
    code: "class Student:\n    def __init__(self, name, course):\n        self.name = name\n        self.course = course\n\ns1 = Student(\"Ashok\", \"Python\")\ns2 = Student(\"John\", \"AI\")\n\nprint(s1.name)\nprint(s2.name)",
  },
  {
    id: "instance-methods",
    title: "Instance Methods",
    content: "Methods that use **`self`** are called **instance methods**. They work with object data.",
    code: "class Student:\n    def __init__(self, name, marks):\n        self.name = name\n        self.marks = marks\n\n    def display_result(self):\n        if self.marks > 35:\n            print(self.name, \"Passed\")\n        else:\n            print(self.name, \"Failed\")\n\ns1 = Student(\"John\", 100)\ns2 = Student(\"Michael\", 25)\n\ns1.display_result()\ns2.display_result()",
  },
  {
    id: "class-variables",
    title: "Class Variables",
    content: "**Class variables** are declared inside the class but **outside methods**. They are **shared by all objects** of the class (accessed via `ClassName.variable`).",
    code: "class Student:\n    inst_name = \"Ashok IT\"\n\n    def __init__(self, name):\n        self.name = name\n\n    def display_result(self):\n        print(self.name, \"--\", Student.inst_name)\n\ns1 = Student(\"John\")\ns2 = Student(\"Michael\")\n\ns1.display_result()\ns2.display_result()",
  },
  {
    id: "instance-vs-class-variables",
    title: "Instance Variables vs Class Variables",
    content: "**Instance variables**\n- Created using `self`\n- Belong to the object\n- Each object can have different values\n\n**Class variables**\n- Created inside the class but outside methods\n- Belong to the class\n- Shared by all objects",
  },
  {
    id: "static-methods",
    title: "Static Methods (Class-Level Methods)",
    content: "A method that **doesn't depend on any object data** is a **static method**. Static methods can be called using the **class name** and are marked with the **`@staticmethod`** decorator.",
    code: "class Student:\n    institute_name = \"Ashok IT\"\n\n    def __init__(self, name, marks):\n        self.name = name\n        self.marks = marks\n\n    def display_result(self):   # instance method\n        print(\"Student Name:\", self.name)\n        print(\"Marks:\", self.marks)\n        if Student.is_pass(self.marks):\n            print(\"Result: Pass\")\n        else:\n            print(\"Result: Fail\")\n\n    @staticmethod\n    def is_pass(marks):         # static method\n        return marks >= 35\n\ns1 = Student(\"Ravi\", 80)\ns2 = Student(\"Kiran\", 25)\ns1.display_result()\nprint(\"----------------\")\ns2.display_result()",
  },
  {
    id: "instance-vs-static-methods",
    title: "Instance Methods vs Static Methods",
    content: "**Instance methods**\n- Belong to the object\n- Work with object data\n- Use `self`\n- Called using an object reference\n\n**Static methods**\n- Belong to the class logically\n- Don't work with object data\n- Don't use `self`\n- Use `@staticmethod`\n- Called using the class name",
  },
  {
    id: "encapsulation",
    title: "Encapsulation",
    content: "**Encapsulation** means wrapping **data and methods into a single unit** — a class itself is an example of encapsulation. It is used to **protect data from direct access**.\n\n**Public variables** can be accessed anywhere:",
    code: "class Student:\n    def __init__(self, name):\n        self.name = name\n\ns1 = Student(\"Ashok\")\ns1.name = \"John\"\nprint(s1.name)",
  },
  {
    id: "private-variables",
    title: "Private Variables, Getters & Setters",
    content: "**Private variables** are declared using a **double underscore `__`** and cannot be accessed directly outside the class. To use them we write **getter** and **setter** methods:\n- **Setter** updates the private variable's data.\n- **Getter** reads the private variable's data.",
    code: "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n\n    def get_balance(self):\n        return self.__balance\n\n    def set_balance(self, balance):\n        self.__balance = balance\n\naccount = BankAccount(200)\n# print(account.__balance)  # error\nprint(account.get_balance())\naccount.set_balance(100)\nprint(account.get_balance())",
  },
  {
    id: "inheritance",
    title: "Inheritance",
    content: "**Inheritance** means **acquiring properties and methods from one class into another** — it gives us code re-usability, like a child inheriting a parent's properties.\n\n- **Parent class** is also called base class or super class.\n- **Child class** is also called derived class or sub class — it can access the parent's members directly.",
    code: "class Parent:\n    def house(self):\n        print(\"Parent House\")\n\nclass Child(Parent):\n    def bike(self):\n        print(\"Child Bike\")\n\nc = Child()\nc.bike()\nc.house()",
  },
  {
    id: "inheritance-chatbot-example",
    title: "Inheritance in Action — a Chatbot Example",
    content: "A more real-world example: a base `ChatBot` class provides shared behaviour (`welcome_user`, `collect_question`), and each specialised bot **inherits** it while adding its own behaviour.",
    code: "class ChatBot:\n\n    def welcome_user(self):\n        print(\"Welcome to GEN AI Chatbot..\")\n\n    def collect_question(self, question):\n        print(\"User Question : \", question)\n\n\nclass CustomerSupportBot(ChatBot):\n    def solve_customer_issue(self):\n        print(\"Solving Customer issue using AI\")\n\nclass CourseCounsellingBot(ChatBot):\n    def suggest_course(self):\n        print(\"Suggesting Best Course Using AI\")\n\n\nbot1 = CustomerSupportBot()\nbot1.welcome_user()\nbot1.collect_question(\"Why my outlook is not working ?\")\nbot1.solve_customer_issue()\n\nprint(\"--------------------------\")\n\nbot2 = CourseCounsellingBot()\nbot2.welcome_user()\nbot2.collect_question(\"Which course is best for me ?\")\nbot2.suggest_course()",
  },
  {
    id: "types-of-inheritance",
    title: "Types of Inheritance",
    content: "Python supports **5 types of inheritance**:\n1. Single Inheritance\n2. Multiple Inheritance\n3. Multilevel Inheritance\n4. Hierarchical Inheritance\n5. Hybrid Inheritance",
  },
  {
    id: "single-inheritance",
    title: "Single Inheritance",
    content: "**One child class** inherits from **one parent class**.",
    code: "class Parent:\n    def parent_method(self):\n        print(\"Parent method\")\n\nclass Child(Parent):\n    def child_method(self):\n        print(\"Child method\")\n\nobj = Child()\n\nobj.parent_method()\nobj.child_method()",
  },
  {
    id: "multiple-inheritance-mro",
    title: "Multiple Inheritance & MRO",
    content: "**One child class** inherits from **multiple parent classes**. Python resolves which method to run using **MRO (Method Resolution Order)**:\n1. Check the current class first — if the method is available, execute it (no need to check the parents).\n2. If not available in the current class, check the **first** parent — if available, execute it (no need to check the second parent).\n3. Only if it's not in the first parent does Python check the **second** parent.",
    code: "class Father:\n    def father_property(self):\n        print(\"Father property\")\n    def m1(self):\n        print(\"Father m1 method\")\n\nclass Mother:\n    def mother_property(self):\n        print(\"Mother property\")\n    def m1(self):\n        print(\"Mother m1 method\")\n\nclass Child(Father, Mother):\n    def child_property(self):\n        print(\"Child property\")\n    def m1(self):\n        print(\"Child m1 method\")\n\n\nobj = Child()\nobj.father_property()\nobj.mother_property()\nobj.child_property()\nobj.m1()",
  },
  {
    id: "multilevel-inheritance",
    title: "Multilevel Inheritance",
    content: "**One class inherits from another child class** — forming a chain: Child → Parent → GrandParent.",
    code: "class GrandParent:\n    def grandparent_method(self):\n        print(\"Grand Parent method\")\n\nclass Parent(GrandParent):\n    def parent_method(self):\n        print(\"Parent method\")\n\nclass Child(Parent):\n    def child_method(self):\n        print(\"Child Method\")\n\nobj = Child()\nobj.child_method()\nobj.parent_method()\nobj.grandparent_method()",
  },
  {
    id: "hierarchical-inheritance",
    title: "Hierarchical Inheritance",
    content: "**Multiple child classes** inherit from the **same parent class**.",
    code: "class Parent:\n    def parent_method(self):\n        print(\"Parent method\")\n\nclass Child1(Parent):\n    def child1_method(self):\n        print(\"Child1 method\")\n\nclass Child2(Parent):\n    def child2_method(self):\n        print(\"Child2 method\")\n\nc1 = Child1()\nc2 = Child2()\n\nc1.parent_method()\nc1.child1_method()\nprint(\"------------------\")\nc2.parent_method()\nc2.child2_method()",
  },
  {
    id: "hybrid-inheritance",
    title: "Hybrid Inheritance",
    content: "**Hybrid inheritance** means combining two or more inheritance types in a single program.\n\nHere, `B` and `C` inherit from `A` (hierarchical), and `D` inherits from both `B` and `C` (multiple).",
    code: "class A:\n    def method_a(self):\n        print(\"Method from class A\")\n\nclass B(A):\n    def method_b(self):\n        print(\"Method from class B\")\n\nclass C(A):\n    def method_c(self):\n        print(\"Method from class C\")\n\nclass D(B, C):\n    def method_d(self):\n        print(\"Method from class D\")\n\nobj = D()\nobj.method_a()\nobj.method_b()\nobj.method_c()\nobj.method_d()",
  },
  {
    id: "method-overriding",
    title: "Method Overriding",
    content: "If a **child class provides its own implementation** for a method already defined in the parent class, it is called **method overriding**.",
    code: "class Parent:\n    def display(self):\n        print(\"Parent display method\")\n\nclass Child(Parent):\n    def display(self):\n        print(\"Child display method\")\n\nobj = Child()\nobj.display()\n\n\n########## A more real-world example ##########\n\nclass AIModel:\n    def generate_response(self, prompt):\n        print(\"Generating response using general AI Model\")\n\nclass OpenAIModel(AIModel):\n    def generate_response(self, prompt):\n        print(\"Generating response using OpenAI GPT Model\")\n        print(\"Prompt:\", prompt)\n\nclass GeminiModel(AIModel):\n    def generate_response(self, prompt):\n        print(\"Generating response using Gemini Model\")\n        print(\"Prompt:\", prompt)\n\nmodel1 = OpenAIModel()\nmodel1.generate_response(\"Explain Python Decorators\")\nprint(\"====================================================\")\nmodel2 = GeminiModel()\nmodel2.generate_response(\"Explain Python File handling\")",
  },
  {
    id: "super-function",
    title: "The super() Function",
    content: "**`super()`** is used to call the parent class's **constructor or method** from inside the child class.",
    code: "class Parent:\n    def display(self):\n        print(\"Parent display method\")\n\nclass Child(Parent):\n    def display(self):\n        super().display()\n        print(\"Child display method\")\n\nobj = Child()\nobj.display()\n\n\n########## Using super() in a constructor ##########\n\nclass Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Student(Person):\n    def __init__(self, name, course):\n        super().__init__(name)\n        self.course = course\n\n    def display(self):\n        print(self.name)\n        print(self.course)\n\n\ns1 = Student(\"Ashok\", \"Python\")\ns1.display()",
  },
  {
    id: "polymorphism",
    title: "Polymorphism",
    content: "**Polymorphism** means **one name with many forms** — the same method name behaves differently based on the object calling it.\n\nA real-life analogy: the same person acts as a **trainer** in class, an **employee** at the office, a **director** at the institute, and a **family member** at home — one identity, many roles.",
    code: "class Dog:\n    def sound(self):\n        print(\"Dog Barks\")\n\nclass Cat:\n    def sound(self):\n        print(\"Cat meows\")\n\ndef animal_sound(i):\n    i.sound()\n\ndog = Dog()\ncat = Cat()\n\nanimal_sound(dog)\nanimal_sound(cat)\n\n\n########## A payments example ##########\n\nclass UpiPayment:\n    def pay(self, amount):\n        print(f\"Paid ₹{amount} using UPI\")\n\nclass CreditCardPayment:\n    def pay(self, amount):\n        print(f\"Paid ₹{amount} using Credit Card\")\n\nclass DebitCardPayment:\n    def pay(self, amount):\n        print(f\"Paid ₹{amount} using Debit Card\")\n\nclass CashPayment:\n    def pay(self, amount):\n        print(f\"Paid ₹{amount} using Hand Cash\")\n\ndef make_payment(payment_method_type, amount):\n        payment_method_type.pay(amount)\n\nmake_payment(CreditCardPayment(), 1000)\nmake_payment(DebitCardPayment(), 2000)\nmake_payment(CashPayment(), 5000)\nmake_payment(UpiPayment(), 10000)",
  },
  {
    id: "method-overloading",
    title: "Method Overloading",
    content: "Writing the **same method multiple times with different parameters** in the same class is called **method overloading**.\n\n**Note:** Python does **not** directly support method overloading — if you define a method with the same name more than once, the **latest definition replaces the previous one**.",
    code: "class Calculator:\n\n    def add(self, a, b):\n        return a + b\n\n    def add(self, a, b, c):\n        return a + b + c\n\ncal = Calculator()\n# print(cal.add(1,2))     # TypeError — the 2-argument version no longer exists\nprint(cal.add(1, 2, 3))",
  },
  {
    id: "abstraction-and-abstract-classes",
    title: "Abstraction & Abstract Classes",
    content: "**Abstraction** means hiding implementation details and showing only the required information. For example, when driving a car we use the steering, brakes, and accelerator — we don't need to know the internal engine implementation.\n\nAn **abstract class** is a class that contains **abstract methods**. It **cannot** be used to create an object directly. In Python, abstraction is implemented using the **`abc`** module (**abc = Abstract Base Classes**).\n\n- An **abstract method** is declared in the parent class but has no body (`pass`) — it must be implemented in the child class.\n- A **concrete method** is a method that **does** have a body, and can be inherited as-is.\n\nAn abstract class can contain abstract methods, concrete methods, a constructor, instance variables, and static methods. When a class extends an abstract class, it **must override every abstract method**. And if a child class doesn't define its own constructor, it uses the parent (abstract) class's constructor — if it **does** define one, it can still call the parent's via `super().__init__()`.",
    code: "from abc import ABC, abstractmethod\n\nclass Payment(ABC):\n\n    def __init__(self):\n        print(\"Payment Class Constructor\")\n\n    @abstractmethod\n    def pay(self, amount):\n        pass\n\n    def payment_success_msg(self):\n        print(\"Payment is successful\")\n\nclass UpiPayment(Payment):\n    def pay(self, amount):\n        print(\"Paid using UPI : \", amount)\n        super().payment_success_msg()\n\nclass CreditCardPayment(Payment):\n    def __init__(self):\n        super().__init__()\n\n    def pay(self, amount):\n        print(\"Paid using CreditCard : \", amount)\n        super().payment_success_msg()\n\n\nupi = UpiPayment()\nupi.pay(120)\n\ncredit = CreditCardPayment()\ncredit.pay(35000)",
  },
  {
    id: "oop-important-points",
    title: "OOP — Important Points",
    content: "- OOP stands for Object Oriented Programming; Python fully supports it.\n- A **class** is a blueprint/model/plan/template used to define properties and behaviours.\n- An **object** is an instance of a class; **self** refers to the current object.\n- A **constructor** (`__init__()`) initializes instance variables and is called automatically when an object is created.\n- Variables declared using `self` are **instance variables** — every object maintains its own copy. **Class variables** are shared by all objects.\n- **Instance methods** use `self` as their first parameter and are called via an object reference; **static/class-level methods** are called via the class name.\n- **Encapsulation** protects data — private variables use a double underscore (e.g. `__name`), accessed via getter/setter methods.\n- **Inheritance** improves code re-usability; a child class can access parent class members directly. Python follows **MRO** to decide which method runs.\n- **`super()`** calls the parent class's method or constructor.\n- **Polymorphism** means one name, many forms (behaviours). Redefining a parent's method in the child is **method overriding**; Python does **not** directly support method **overloading**.\n- **Abstraction** hides implementation details; an abstract class (via the `abc` module) can hold both abstract and concrete methods. Python has no separate \"interface\" concept — abstract classes fill that role. A class extending an abstract class must implement every abstract method.",
  },
];

const PYTHON_MODULES_SECTIONS = [
  {
    id: "what-is-a-module",
    title: "What is a Module?",
    content: "A **module** is a Python file that contains reusable code. A module can contain **variables, functions, classes, and statements**.\n\nThe module file extension is **`.py`** — e.g. `calculator.py`, `student.py`, `backend.py`, `frontend.py`.\n\n**Simple meaning:** a module means one Python file. If we write functions in one Python file and use them in another, that file is called a module.",
  },
  {
    id: "why-modules",
    title: "Why Modules?",
    content: "Modules are used for:\n- **Code reusability**\n- **Code organization**\n- **Reducing duplicate code**\n- **Easy maintenance**\n- **Splitting large programs into small files**\n- **Using built-in Python features**",
  },
  {
    id: "types-of-modules",
    title: "Types of Modules",
    content: "Python has mainly **3 types of modules**:\n1. **Built-in modules** — already available in Python.\n2. **User-defined modules** — modules you create yourself.\n3. **External / Third-party modules** — installed via `pip`.",
  },
  {
    id: "built-in-modules",
    title: "Built-in Modules",
    content: "**Built-in modules** are already available in Python — we can use them directly by importing. Examples: **`math`, `random`, `datetime`, `os`, `sys`, `json`**.",
    code: "import keyword\nimport sys\nimport math\nimport random\nimport datetime\nimport os\n\nprint(keyword.kwlist)\n\na = 20\nprint(type(a), sys.getsizeof(a))\n\nprint(math.sqrt(25))\nprint(math.pow(2, 3))\nprint(math.ceil(10.2))\nprint(math.floor(10.2))\nprint(math.factorial(5))\nprint(math.pi)\n\nprint(random.randint(1, 10))\nprint(random.randint(100000, 999999))\n\ntoday = datetime.date.today()\nnow = datetime.datetime.now()\nprint(\"Today Date : \", today)\nprint(\"Today Date & Time : \", now)\n\nprint(os.getcwd())\nprint(sys.version)",
  },
  {
    id: "external-modules",
    title: "External Modules & pip",
    content: "**External modules** are not available by default — we install them using **`pip`** (Python's package manager).\n\nExamples: **`numpy`, `pandas`, `matplotlib`, `requests`, `fastapi`, `django`**.\n\nInstall a module like this:\n```\npip install matplotlib\n```",
  },
  {
    id: "matplotlib-plots",
    title: "Plotting with matplotlib",
    content: "After installing an external module, import and use it. Here's a simple **line chart** and a **bar chart** with matplotlib.",
    code: "import matplotlib.pyplot as plt\n\n# Line chart\nx = [1, 2, 3, 4, 5]\ny = [10, 20, 30, 40, 50]\nplt.plot(x, y)\nplt.title(\"Simple Line Chart\")\nplt.xlabel(\"X Values\")\nplt.ylabel(\"Y Values\")\nplt.show()\n\n# Bar chart\nstudents = [\"Ravi\", \"Anil\", \"Priya\", \"Sneha\"]\nmarks = [75, 85, 90, 80]\nplt.bar(students, marks)\nplt.title(\"Student Marks\")\nplt.xlabel(\"Student Names\")\nplt.ylabel(\"Marks\")\nplt.show()",
  },
  {
    id: "import-keyword",
    title: "The import Keyword",
    content: "The **`import`** keyword is used to use one module inside another Python file.\n\nSyntax: `import module_name`\n\nWe can also give a module an **alias** using the **`as`** keyword.",
    code: "import math\nimport sys\nimport os\n\n# Module with alias name\nimport math as m\nprint(m.sqrt(5))",
  },
  {
    id: "from-import",
    title: "from ... import",
    content: "**`from import`** is used to import a **specific** function or variable from a module.\n\nSyntax:\n```\nfrom module_name import function_name\nfrom module_name import function_name1, function_name2, function_name3\n```",
    code: "from math import sqrt, factorial\n\nprint(sqrt(5))\nprint(factorial(5))",
  },
  {
    id: "user-defined-module",
    title: "Create a User-Defined Module",
    content: "Create your own module and import it into another file.\n\n**Step 1:** create a file named `calculator.py` with your functions.\n**Step 2:** import and use it in `main.py` — with `import calculator`, `import calculator as calc`, or `from calculator import add, mul`.",
    code: "# calculator.py\ndef add(a, b):\n    return a + b\n\ndef sub(a, b):\n    return a - b\n\ndef mul(a, b):\n    return a * b\n\ndef div(a, b):\n    return a / b\n\n\n# main.py\n# import calculator\n# import calculator as calc\nfrom calculator import add, mul\n\nprint(add(10, 20))\nprint(mul(10, 20))",
  },
  {
    id: "what-is-a-python-library",
    title: "What is a Python Library?",
    content: "Imagine writing a calculator.\n\n- **Without libraries** — you write every mathematical function yourself.\n- **With libraries** — someone already wrote those functions; you simply use them.\n\n**Library = ready-made code.**",
    code: "### without library ###\ndef square(num):\n    return num*num\n\nprint(square(10))\n\n### using library ###\nimport math\n\nprint(math.sqrt(100))",
  },
  {
    id: "library-real-life-example",
    title: "Real-Life Example — Building a House",
    content: "Suppose you are constructing a house.\n\n**Without a library**, you'd have to **manufacture** the bricks, cement, steel, doors, and windows yourself before you could even start building — which is practically impossible.\n\nInstead, we **purchase ready-made material** required for house construction.\n\nProgramming is the same — **libraries are ready-made building blocks**.",
  },
  {
    id: "what-is-a-library",
    title: "What is a Library?",
    content: "A **library** is a **collection of packages**.\n\n**Example — the NumPy library** contains packages for:\n- Linear Algebra\n- Random\n- Statistics\n- Matrix\n\n**Package** means a collection of modules. **Module** means a Python file.",
  },
  {
    id: "types-of-python-libraries",
    title: "Types of Python Libraries",
    content: "**1. Standard Libraries** — already available, no need to install:\n- `math`, `random`, `datetime`, `os`, `sys`, `json`\n\n**2. Third-Party Libraries** — need to be installed:\n- `numpy`, `pandas`, `matplotlib`, `flask`, `django`, `tensorflow`, `fastapi`, `scikit-learn`, `streamlit`\n\nWe use **`pip`** to install third-party libraries. It's best to use a **virtual environment** to install project-specific libraries.",
  },
  {
    id: "popular-libraries-data-science-ml",
    title: "Popular Libraries — Data Science, ML & Deep Learning",
    content: "**NumPy**\n- Purpose: Numerical computing\n- Used for: Arrays, matrix operations, linear algebra\n- Projects: AI, ML, scientific computing\n\n**Pandas**\n- Purpose: Data analysis\n- Used for: Reading CSV/Excel, data cleaning, data manipulation\n- Projects: Data science, business intelligence\n\n**Matplotlib**\n- Purpose: Data visualization\n- Used for: Line, bar, pie, graph, and scatter charts\n- Projects: Reports, dashboards\n\n**Scikit-Learn**\n- Purpose: Machine learning\n- Used for: Classification, regression, clustering\n- Projects: Prediction systems, recommendation systems\n\n**TensorFlow**\n- Purpose: Deep learning\n- Used for: Neural networks, computer vision, NLP\n- Projects: Image recognition",
  },
  {
    id: "popular-libraries-web-genai",
    title: "Popular Libraries — Web, APIs & Gen AI Deployment",
    content: "**Flask**\n- Purpose: Web framework\n- Used for: REST APIs, small web applications\n- Projects: Backend services, microservices\n\n**Django**\n- Purpose: Full-stack web framework\n- Used for: Large-scale enterprise web applications\n- Projects: E-commerce, ERP, CRM\n\n**FastAPI**\n- Purpose: High-performance API framework\n- Used for: REST APIs for AI/ML/Gen AI/Agentic AI projects\n- Projects: Backend REST APIs\n\n**Streamlit**\n- Purpose: Web apps for data science\n- Used for: Building interactive dashboards\n- Projects: AI chatbot demos, data visualization\n\n**Hugging Face**\n- Purpose: AI model hub\n- Used for: LLMs, text generation, image generation, AI model deployment\n- Projects: ChatGPT-like applications, AI assistants, translation systems",
  },
];

const PYTHON_FUNCTIONS_SECTIONS = [
  {
    id: "what-is-a-function",
    title: "What is a Function?",
    content: "A **function** is a block of **reusable code** used to perform a **specific task**. Instead of writing the same code again and again, we write it once inside a function and use it multiple times.",
  },
  {
    id: "why-functions",
    title: "Why Functions?",
    content: "Functions give us:\n1. **Code reusability**\n2. **Code readability**\n3. **Code organization**\n4. **Reduced duplicate code**\n5. **Easy debugging**\n6. **Easy maintenance**",
  },
  {
    id: "function-syntax",
    title: "Function Syntax",
    content: "Use the **`def`** keyword to define a function:\n```\ndef function_name():\n    statements\n```\nA function executes **only when we call it**.",
    code: "# define function\ndef greet():\n    print(\"Welcome to python\")\n\n# calling function\ngreet()",
  },
  {
    id: "function-important-points",
    title: "Important Points",
    content: "- **`def`** keyword defines a function.\n- Function names should be **meaningful**.\n- The function body is written with **indentation**.\n- A function executes only when **called**, and can be called **multiple times**.\n- Use **snake_case** for naming (small letters joined with `_`).\n\nExamples: `student_name`, `course_fee`, `find_biggest`, `calculate_total_amount`, `send_email_notification`.",
  },
  {
    id: "function-parameters",
    title: "Function with Parameters",
    content: "**Parameters** are variables declared inside the function brackets — they receive input values into the function.",
    code: "# one parameter\ndef greet(name):\n    print(name, \" Welcome to python\")\n\ngreet(\"Ashok\")\ngreet(\"John\")\ngreet(\"Steve\")\n\n# multiple parameters\ndef print_student_data(name, course):\n    print(\"Student Name is :\", name)\n    print(\"Student Course is :\", course)\n\nprint_student_data(\"Ashok\", \"Python\")\nprint_student_data(\"John\", \"GEN AI\")",
  },
  {
    id: "parameter-vs-argument",
    title: "Parameter vs Argument",
    content: "- **Parameter** — the variable declared in the function definition.\n- **Argument** — the actual value passed during the function call.\n\nIn `add(10, 20)` below, `a` and `b` are **parameters**; `10` and `20` are **arguments**.",
    code: "def add(a, b):\n    print(a + b)\n\nadd(10, 20)",
  },
  {
    id: "return-value",
    title: "Function with Return Value",
    content: "The **`return`** keyword sends a result back from a function.",
    code: "def add(i, j):\n    return i + j\n\nresult = add(10, 20)\nprint(result)",
  },
  {
    id: "no-return-value",
    title: "Function Without Return Value",
    content: "If a function does not return anything, it returns **`None`** by default.",
    code: "def greet():\n    print(\"Welcome\")\n\nresult = greet()\nprint(result)\n\n# Output:\n# Welcome\n# None",
  },
  {
    id: "return-keyword",
    title: "The return Keyword",
    content: "**`return`** returns a value from a function. After a `return` statement, function execution **stops** — any code written after it is skipped.",
    code: "def test():\n    print(\"Before return\")\n    return\n    print(\"After return\")\n\ntest()\n\n# Output:\n# Before return",
  },
  {
    id: "even-odd-biggest",
    title: "Examples: Even/Odd & Biggest",
    content: "Two quick examples using `return` with a condition.",
    code: "def check_even_odd(num):\n    if num % 2 == 0:\n        return \"Even\"\n    else:\n        return \"Odd\"\n\nresult = check_even_odd(11)\nprint(f\"The given number is {result}\")\n\ndef find_biggest(a, b):\n    if a > b:\n        return a\n    else:\n        return b\n\nresult = find_biggest(20, 35)\nprint(f\"The biggest is {result}\")",
  },
  {
    id: "types-of-arguments",
    title: "Types of Arguments",
    content: "Python supports different types of function arguments:\n1. **Positional Arguments**\n2. **Keyword Arguments**\n3. **Default Arguments**\n4. **Variable Length Arguments** (`*args`)\n5. **Keyword Variable Length Arguments** (`**kwargs`)",
  },
  {
    id: "positional-keyword-args",
    title: "Positional & Keyword Arguments",
    content: "**Positional arguments** — values are assigned based on **position** (order matters).\n\n**Keyword arguments** — values are passed using **parameter names** (order does not matter).",
    code: "# Positional — order is important\ndef student(name, course):\n    print(\"Name:\", name)\n    print(\"Course:\", course)\n\nstudent(\"Ashok\", \"Python\")\n\n# Keyword — order is not important\nstudent(course=\"JAVA\", name=\"John\")",
  },
  {
    id: "default-arguments",
    title: "Default Arguments",
    content: "**Default arguments** provide default values to parameters. If a value is not passed, the default is used.\n\n**Note:** default arguments must come after non-default arguments.",
    code: "def enroll_student(name, course=\"GEN AI\"):\n    print(\"Student Name:\", name)\n    print(\"Enrolled Course:\", course)\n\nenroll_student(\"Ashok\", \"DEVOPS\")\nenroll_student(\"Steve\")",
  },
  {
    id: "variable-length-args",
    title: "Variable Length Arguments (*args)",
    content: "Use **`*args`** when you don't know how many values will be passed. `*args` stores the values in a **tuple**.\n\n**Notes:** `*args` should be the last positional parameter; after it you can still use keyword arguments.",
    code: "def print_numbers(*args):\n    print(args)\n\nprint_numbers(10)\nprint_numbers(20, 30)\nprint_numbers(30, 40, 50)\n\n# sum using *args\ndef add_numbers(*args):\n    total = 0\n    for num in args:\n        total = total + num\n    return total\n\nprint(add_numbers(10, 20))\nprint(add_numbers(10, 20, 30, 40))\n\n# keyword arg after *args\ndef print_model(*args, model):\n    print(args, model)\n\nprint_model(10, model=\"gpt\")\nprint_model(20, 30, model=\"gpt\")",
  },
  {
    id: "kwargs",
    title: "Keyword Variable Length Arguments (**kwargs)",
    content: "Use **`**kwargs`** to pass multiple **key-value pairs**. It stores them in a **dictionary**.",
    code: "def student_details(**kwargs):\n    print(kwargs)\n\nstudent_details(name=\"Ashok\", course=\"GEN AI\")\nstudent_details(name=\"John\", course=\"Python\", fee=1000)",
  },
  {
    id: "local-global-variables",
    title: "Local & Global Variables",
    content: "- A **local variable** is declared inside a function and can be used **only** inside it (using it outside raises `NameError`).\n- A **global variable** is declared outside a function and can be used **inside and outside** functions.",
    code: "def test():\n    msg = \"Hello Python\"   # local\n    print(msg)\n\ntest()\n# print(msg)  # NameError: name 'msg' is not defined\n\nmsg = \"Welcome to AI Training\"   # global\n\ndef show():\n    print(msg)\n\nshow()\nprint(msg)",
  },
  {
    id: "global-keyword",
    title: "The global Keyword",
    content: "The **`global`** keyword is used to **modify a global variable inside a function**. Without it, an assignment inside the function creates a new local variable instead.",
    code: "msg = \"Welcome to AI Training\"\n\ndef test():\n    msg = \"Welcome to Python\"   # local, doesn't change global\n    print(msg)\n\ndef demo():\n    global msg\n    msg = \"Welcome to JAVA\"     # changes the global\n    print(msg)\n\ntest()\ndemo()\nprint(msg)",
  },
  {
    id: "nested-functions",
    title: "Function Inside Function",
    content: "We can define one function **inside** another. The inner function is only visible inside the outer one — useful for organizing helper logic (e.g. a payment receipt with validate/calculate/generate helpers).",
    code: "def outer():\n    print(\"outer function\")\n\n    def inner():\n        print(\"inner function\")\n\n    inner()\n\nouter()\n\n# Real example: bill receipt for a course payment\ndef process_payment(student_name, course_fee, paid_amount):\n    def validate_payment():\n        if paid_amount <= 0:\n            return False\n        if paid_amount > course_fee:\n            return False\n        return True\n\n    def calculate_balance():\n        return course_fee - paid_amount\n\n    def generate_receipt(balance):\n        print(\"Payment Receipt\")\n        print(\"---------------\")\n        print(\"Student Name : \", student_name)\n        print(\"Course Fee : \", course_fee)\n        print(\"Paid Amount : \", paid_amount)\n        print(\"Balance : \", balance)\n\n    if validate_payment():\n        generate_receipt(calculate_balance())\n    else:\n        print(\"Invalid Payment\")\n\nprocess_payment(student_name=\"Ashok\", course_fee=12000, paid_amount=5000)",
  },
  {
    id: "assignment-shopping-cart-bill",
    title: "Assignment — Shopping Cart Bill Calculation",
    content: "When a customer places an order, we need to:\n1. Calculate the total cart amount\n2. Apply a discount\n3. Add delivery charges\n4. Generate the final bill\n\n**Rules:**\n- If `cart_amount >= 5000`, apply a **2%** discount.\n- If `cart_amount >= 3000`, apply a **1%** discount.\n- If `cart_amount >= 1000`, delivery is **free**; otherwise the delivery charge is **₹50**.\n\nUse separate functions for each step (calculate total, apply discount, add delivery charge, generate bill) — the same **function-composition** pattern as the payment receipt example above.",
  },
  {
    id: "type-hints",
    title: "Type Hints",
    content: "Python lets you add **type hints** for parameters and the return type. They are **hints for developers only** — Python does not enforce them, so a function annotated for `int` still runs with strings.",
    code: "def f1(a, b):\n    return a + b\n\ndef f2(a: int, b: int) -> int:\n    return a + b\n\nresult = f2(10, 20)\nprint(result, type(result))\n\nresult = f2(\"Hi\", \"Hello\")   # hints are not enforced\nprint(result, type(result))",
  },
  {
    id: "decorators",
    title: "Decorators",
    content:
      "A **decorator** is a function that takes another function as an argument and **extends or modifies its behavior** without permanently modifying the original function — `Original Function + Decorator Function = Enhanced Function`. Think of it like a **gift wrapper**: it doesn't change the gift, but makes it look better and more useful.\n\n" +
      "**How decorators work:** the decorator defines an inner `wrapper(*args, **kwargs)` function that can do something before calling the original function, call it (`result = original_func(*args, **kwargs)`), do something after, then return the result. The decorator returns `wrapper`, and `@decorator` syntax applies it.\n\n" +
      "**Decorators with arguments:** the wrapper accepts `*args, **kwargs` and forwards them to the original function — this lets a decorator like `@repeat(3)` (call a function 3 times) or `@timer` (measure and print execution time) work on any function signature.\n\n" +
      "**Multiple decorators** stack — `@decor_one` above `@decor_two` on the same function runs `decor_one`'s \"before\" first, then `decor_two`'s \"before\", then the function, then `decor_two`'s \"after\", then `decor_one`'s \"after\" (like nested wrapping).\n\n" +
      "**Built-in decorators:** `@staticmethod` defines a static method; `@classmethod` defines a class method; `@property` defines a read-only attribute (you can create a setter too); `@functools.lru_cache` caches the results of a function.\n\n" +
      "**Benefits:** promotes code reusability, improves readability, keeps logic DRY (Don't Repeat Yourself), and makes it easy to add or modify behavior — great for logging, timing, authentication, validation, and caching.\n\n" +
      "**When to use decorators:** when you want to add the same functionality to many functions, when you want to keep your code clean and DRY, and for cross-cutting concerns like logging, authentication, and caching.\n\n" +
      "**Quick recap (flow):** create a decorator function → it takes a function as an argument (`func`) → it returns a wrapper function (`wrapper()`) → apply it with `@decorator` syntax on `def func(): ...` → the enhanced function is ready to use.\n\n" +
      "**Pro tip:** use decorators wisely — too many stacked decorators can make code hard to understand.",
    code:
      "def my_decorator(func):\n" +
      "    def wrapper():\n" +
      "        print(\"Before function call\")\n" +
      "        func()\n" +
      "        print(\"After function call\")\n" +
      "    return wrapper\n\n" +
      "@my_decorator\n" +
      "def say_hello():\n" +
      "    print(\"Hello, Python Developer!\")\n\n" +
      "say_hello()\n" +
      "# Output:\n" +
      "# Before function call\n" +
      "# Hello, Python Developer!\n" +
      "# After function call\n\n" +
      "# Decorator with arguments\n" +
      "def repeat(num):\n" +
      "    def decorator(func):\n" +
      "        def wrapper(*args, **kwargs):\n" +
      "            for _ in range(num):\n" +
      "                func(*args, **kwargs)\n" +
      "        return wrapper\n" +
      "    return decorator\n\n" +
      "@repeat(3)\n" +
      "def greet(name):\n" +
      "    print(f\"Hello {name}!\")\n\n" +
      "greet(\"Rahul\")   # prints \"Hello Rahul!\" three times",
    image: "/python-notes/python-decorators-day51.jpg",
    imageAlt:
      "Python Decorators (Day 51/100, #100DaysOfCode Data Engineering Journey, by DataWithRahul) — a decorator takes another function as an argument and extends or modifies its behavior without permanently modifying the original function: Original Function + Decorator Function = Enhanced Function. Sections: What is a Decorator, How Decorators Work (decorator_func wrapping a wrapper around original_func), a Simple Example (@my_decorator on say_hello with before/after print output), Decorator with Arguments (@repeat(3) calling greet 3 times), Decorator with Arguments Example (@timer measuring execution time), Multiple Decorators (stacked @decor_one @decor_two showing nested before/after order), Built-in Decorators (@staticmethod, @classmethod, @property, @functools.lru_cache), Benefits of Decorators (reusability, readability, DRY, easy to add/modify behavior, great for logging/timing/auth/caching), When to Use Decorators, and a Quick Recap flow diagram (create decorator function -> takes a function as argument -> returns a wrapper function -> apply with @decorator syntax -> enhanced function ready to use).",
  },
];

const PYTHON_DATA_STRUCTURES_SECTIONS = [
  {
    id: "what-are-data-structures",
    title: "Python Data Structures",
    content: "**Data structures** are ways to store, organize, and manage data in a program. In Python, the most commonly used built-in data structures are:\n1. **List**\n2. **Tuple**\n3. **Set**\n4. **Dictionary**\n5. **String**\n\nEach data structure has a different purpose.",
  },
  {
    id: "what-is-a-list",
    title: "What is a List?",
    content: "A **list** stores multiple values in a single variable. Lists are **ordered**, **mutable** (changeable), **allow duplicates**, and can store **different data types**.\n\nSyntax: `my_list = [value1, value2, value3]`\n\nWe access list elements using their **index** — in Python, index starts from **0**.",
    code: "marks = [80, 90, 75]\nstudents = [\"Ravi\", \"Sita\", \"Kiran\"]\nmixed_data = [\"Ravi\", 25, 85.5, True]\n\ncourses = [\"JAVA\", \"Python\", \"DevOps\", \"GEN AI\"]\nprint(courses[0])\nprint(courses[3])",
  },
  {
    id: "list-indexing-slicing",
    title: "List Indexing & Slicing",
    content: "**Positive indexing** starts from the left (0, 1, 2…); **negative indexing** starts from the right (-1, -2…).\n\n**Slicing** gets a part of a list — `list_name[start:end]` (start inclusive, end exclusive).",
    code: "items = [\"Laptop\", \"Mouse\", \"Keyboard\", \"Monitor\"]\nprint(items[0])    # positive index\nprint(items[-1])   # negative index\n\nnumbers = [10, 20, 30, 40, 50, 60]\nprint(numbers[1:4])   # 20 30 40\nprint(numbers[:3])    # first three\nprint(numbers[2:])    # from index 2 to end\nprint(numbers[::2])   # step by 2\nprint(numbers[::-1])  # reverse",
    image: "/python-notes/python-list-and-slicing-day13.jpg",
    imageAlt: "Python List & Slicing (Day 13/100, #100DaysOfCode Data Engineering Journey) — lists are ordered, mutable collections of items. An example list numbers = [10, 20, 30, 40, 50] with indices 0-4; common operations append/insert/remove/len/access. A slicing table: numbers[1:4] -> [20, 30, 40] (start:1, end:4 exclusive), numbers[:3] -> [10, 20, 30] (start to index 2), numbers[2:] -> [30, 40, 50] (index 2 to end), numbers[-2:] -> [40, 50] (last 2 elements), numbers[::-1] -> [50, 40, 30, 20, 10] (reverse list). A list comprehension example squares = [i*i for i in range(1, 6)], and a nested list example matrix = [[1,2,3],[4,5,6],[7,8,9]] accessed with matrix[1][2]. Why lists are important: store multiple values, easily process and transform data, used in almost every Python program, foundation for advanced structures, essential for data engineers.",
  },
  {
    id: "list-operations",
    title: "List Operations",
    content: "- **append()** — adds an element at the end\n- **insert()** — adds an element at a specified index\n- **extend()** — adds multiple elements\n- **remove()** — removes a specified value\n- **pop()** — removes by index (or the last element if no index)\n- **clear()** — removes all elements\n- **del** — deletes an element or the entire list",
    code: "courses = [\"Python\", \"Java\"]\ncourses.append(\"DevOps\")\ncourses.insert(1, \"GEN AI\")\nprint(courses)\n\nfrontend = [\"HTML\", \"CSS\"]\nbackend = [\"Python\", \"Django\"]\nfrontend.extend(backend)\nprint(frontend)\n\ncourses.remove(\"Java\")\ncourses.pop()\ncourses.clear()\n\ncourses = [\"Python\", \"Java\", \"DevOps\"]\ndel courses[1]\nprint(courses)",
    image: "/python-notes/python-list-methods.jpg",
    imageAlt: "Python List Methods visual — input, method, and output for .append() (adds to the end), .insert(1, x) (adds at an index), .pop(1) (removes by index), .remove(x) (removes a value), .reverse() (reverses order), .sort() (sorts), .index(x) (returns the position), and .count(x) (returns how many times a value appears)",
  },
  {
    id: "list-functions",
    title: "List Functions",
    content: "Built-in functions work on lists: **len()**, **min()**, **max()**, **sum()**, and the **sort()** method (with `reverse=True` for descending).",
    code: "numbers = [1, 3, 6, 9, 2]\nprint(len(numbers))\nprint(min(numbers))\nprint(max(numbers))\nprint(sum(numbers))\n\nnumbers.sort()\nprint(numbers)\n\nnumbers.sort(reverse=True)\nprint(numbers)",
  },
  {
    id: "list-comprehension",
    title: "List Comprehension",
    content: "**List comprehension** is a short, clean way to create a new list from an existing sequence (range, list, tuple, string). It reduces multiple lines of loop code into a single line, and can include a condition.",
    code: "# normal way vs comprehension\nnumbers = [i for i in range(1, 6)]\nsquares = [i * i for i in range(1, 6)]\neven_numbers = [i for i in range(1, 11) if i % 2 == 0]\n\nnames = [\"ravi\", \"sita\", \"kiran\"]\nupper_names = [name.upper() for name in names]\n\nmarks = [80, 30, 90, 45, 20]\nresults = [\"Pass\" if mark >= 35 else \"Fail\" for mark in marks]\n\nprices = [1000, 2000, 5000]\nprice_with_gst = [price + (price * 18 / 100) for price in prices]\nprint(numbers, squares, even_numbers, results, price_with_gst)",
    image: "/python-notes/python-tip-list-comprehension-day8.jpg",
    imageAlt: "Python Tip (Day 8/100, #100DaysOfCode Data Engineering Journey) — List Comprehension: instead of a 4-line loop appending squares to a list, use a one-line list comprehension squares = [i * i for i in range(1, 6)] for the same [1, 4, 9, 16, 25] output. Why use list comprehension: less code, more readable, Pythonic, and often more efficient than traditional loops. More examples: even numbers, converting a list to uppercase, and a comprehension with a condition.",
  },
  {
    id: "zip-function",
    title: "zip() — Pairing Iterables Together",
    content: "**zip()** pairs related items from multiple iterables together while looping — cleaner code with **no manual indexing** and **no range(len())**. Think of it like a **zipper**: one item from list A + one item from list B = one pair.\n\n- **Loop through multiple lists at once** without indexes.\n- **Convert to a list** of tuples with `list(zip(...))`.\n- **Build a dictionary** with `dict(zip(keys, values))`.\n- **Important rule:** `zip()` stops at the **shortest** iterable — extra items in the longer list are ignored.\n\nGreat for reports, data cleaning, CSV processing, API formatting, and automation. Interview-ready line: *zip() combines multiple iterables element by element, making parallel iteration cleaner and more readable.*",
    code: "names = [\"Alex\", \"Sam\", \"Mia\"]\nscores = [85, 92, 78]\n\n# loop over both lists together\nfor name, score in zip(names, scores):\n    print(name, score)\n\n# convert to a list of pairs\npairs = list(zip(names, scores))\n# [(\"Alex\", 85), (\"Sam\", 92), (\"Mia\", 78)]\n\n# build a dictionary\nstudent_scores = dict(zip(names, scores))\n# {\"Alex\": 85, \"Sam\": 92, \"Mia\": 78}\n\n# zip() stops at the shortest list\na = [1, 2, 3]\nb = [10, 20]\nprint(list(zip(a, b)))   # [(1, 10), (2, 20)] -> 3 is ignored",
    image: "/python-notes/python-zip-explained.jpg",
    imageAlt: "Python zip() explained simply — zip() pairs related items together while looping: pairs items, loops through multiple lists at once (no manual indexing, no range(len)), works like a zipper, real output, convert to a list, build dictionaries, stops at the shortest list, and real-project use cases",
  },
  {
    id: "what-is-a-tuple",
    title: "What is a Tuple?",
    content: "A **tuple** stores multiple values in a single variable — similar to a list, but **immutable** (cannot be changed). Tuples are **ordered**, **allow duplicates**, can store different data types, are **faster than lists**, and are used to store **fixed data**.\n\nSyntax: `my_tuple = (value1, value2, value3)`",
    code: "courses = (\"JAVA\", \"Python\", \"GEN AI\", \"DEVOPS\", \".Net\", \"MERN\")\nprint(courses[0])\nprint(courses[-1])\nprint(courses[1:3])\nprint(courses.index(\"GEN AI\"))\n# courses[1] = \"AWS\"  # NOT possible — immutable",
  },
  {
    id: "tuple-packing-functions",
    title: "Tuple Packing, Unpacking & Functions",
    content: "**Packing** groups values into a tuple; **unpacking** assigns them back to variables.\n\nFunctions like **len(), max(), min(), sum()** work on tuples. **sorted()** returns a new **list** (not a tuple). To modify, convert the tuple to a list with `list()`.",
    code: "# packing\nstudent = \"Ashok\", \"Male\", 66868686\n# unpacking\nname, gender, phone = student\nprint(name, gender, phone)\n\nnumbers = (10, 15, 30, 20, 40, 25)\nprint(len(numbers), sum(numbers), min(numbers), max(numbers))\nprint(sorted(numbers, reverse=True))   # returns a list\n\ncourses = (\"Python\", \"Java\", \"DevOps\")\ncourse_list = list(courses)   # tuple -> list\ncourse_list[0] = \"GEN AI\"\nprint(course_list)\n\nif \"Java\" in courses:\n    print(\"available\")\n\nfullstack = (\"HTML\", \"CSS\") + (\"Python\", \"Django\")   # concatenation\nprint(fullstack)",
  },
  {
    id: "list-vs-tuple",
    title: "List vs Tuple",
    content: "**List**\n- Mutable · uses square brackets `[]`\n- Slower than tuple\n- Used when data changes frequently\n\n**Tuple**\n- Immutable · uses parentheses `()`\n- Faster than list\n- Used when data is fixed",
  },
  {
    id: "what-is-a-set",
    title: "What is a Set?",
    content: "A **set** stores multiple values but only **unique** ones — it **does not allow duplicates**. Sets are **unordered**, **mutable**, can store different data types, and do **not** support indexing or slicing.\n\nSyntax: `my_set = {value1, value2, value3}`\n\nInternally, each value's **hash** is calculated; if a value already exists, it is ignored (that's how duplicates are removed).",
    code: "courses = {\"Python\", \"JAVA\", \"Python\", \"DEVOPS\"}\nprint(courses)   # duplicate \"Python\" removed\n\nprint(hash(\"Python\"))\nprint(hash(\"JAVA\"))",
  },
  {
    id: "set-operations",
    title: "Set Operations & Functions",
    content: "- **add()** — add one element\n- **update()** — add multiple elements\n- **remove()** — remove a specified element (errors if missing)\n- **discard()** — remove an element (no error if missing)\n- **pop()** — remove a random element\n- **clear()** / **del** — remove all / delete the set\n\nFunctions: **len(), min(), max(), sum(), sorted()**. A common use is removing duplicates from a list with **`set()`**.",
    code: "courses = {\"Python\", \"JAVA\", \"DEVOPS\"}\ncourses.add(\"GEN AI\")\ncourses.update([\"GCP\", \"AWS\", \"Azure\"])\ncourses.discard(\"AWS\")   # no error if missing\ncourses.pop()\nprint(courses)\n\nnumbers = {10, 50, 20, 80, 30, 40}\nprint(len(numbers), min(numbers), max(numbers), sum(numbers))\nprint(sorted(numbers, reverse=True))\n\n# remove duplicates from a list\nskills = [\"JAVA\", \"Python\", \"DevOps\", \"JAVA\"]\nprint(set(skills))",
  },
  {
    id: "list-tuple-set",
    title: "List vs Tuple vs Set",
    content: "**List** — mutable, `[]`, ordered, allows duplicates, slower.\n\n**Tuple** — immutable, `()`, ordered, allows duplicates, faster.\n\n**Set** — mutable, `{}`, unordered, **no duplicates**, no indexing/slicing.",
  },
  {
    id: "what-is-a-dictionary",
    title: "What is a Dictionary?",
    content: "A **dictionary** stores data in **key-value pairs** — used when we want to store data with a meaningful key. Dictionaries are **ordered** and **mutable**; **keys must be unique** (duplicate keys not allowed, duplicate values allowed), and values can be any data type.\n\nSyntax:\n```\nmy_dict = { \"key-1\": \"value-1\", \"key-2\": \"value-2\" }\n```",
    code: "student = {\n    \"name\": \"Ravi\",\n    \"age\": 25,\n    \"course\": \"Python\",\n    \"marks\": 85\n}\nprint(student[\"name\"])          # error if key missing\nprint(student.get(\"gender\"))    # None if key missing\nprint(student.get(\"city\", \"Hyd\"))  # default value",
  },
  {
    id: "dictionary-operations",
    title: "Dictionary Operations",
    content: "- Add/update a pair with `dict[key] = value`\n- **keys()**, **values()**, **items()** — view contents\n- **update()** — update values or add new pairs\n- **pop(key)** — remove by key; **popitem()** — remove the last inserted pair\n- **clear()** / **del** — remove all / delete",
    code: "student = {\"name\": \"Ravi\", \"age\": 25, \"course\": \"Python\"}\nstudent[\"grade\"] = \"A\"        # add\nstudent[\"name\"] = \"Raj\"       # update\n\nprint(student.keys())\nprint(student.values())\nprint(student.items())\n\nstudent.update({\"name\": \"Ashok\"})\nstudent.pop(\"grade\")\nstudent.popitem()\ndel student[\"name\"]\nprint(student)",
    image: "/python-notes/python-tip-dictionaries-day14.jpg",
    imageAlt: "Python Tip (Day 14/100, #100DaysOfCode Data Engineering Journey) — Use Dictionaries for Key-Value Power: instead of storing data in parallel lists and accessing by index (confusing), use a dictionary like person = {\"name\": \"Alice\", \"age\": 25, \"role\": \"Data Engineer\"} and access with person[\"name\"] (super easy). Common dictionary operations: Access d[\"key\"], Add/Update d[\"key\"] = value, Delete del d[\"key\"], Keys d.keys(), Values d.values(), Items d.items(). Pro tip: dictionaries are unordered (Python 3.7+ remembers insertion order), great for mappings and fast lookups, use .get() to avoid KeyError.",
  },
  {
    id: "important-methods-set-dict-list",
    title: "Important Methods — Set, Dictionary & List",
    content:
      "A side-by-side reference of the most useful built-in methods for each collection type:\n\n" +
      "**Set:** `add()` `pop()` `copy()` `clear()` `union()` `issubset()` `issuperset()` `difference()` `intersection()` `isdisjoint()` `setdiscard()`\n\n" +
      "**Dictionary:** `get()` `pop()` `copy()` `clear()` `items()` `values()` `update()` `setdefault()` `popitem()` `keys()` `fromkeys()`\n\n" +
      "**List:** `pop()` `sort()` `copy()` `append()` `insert()` `reverse()` `remove()` `extend()` `index()` `count()` `clear()`\n\n" +
      "Notice the overlap: `pop()`, `copy()`, and `clear()` exist on all three, but behave differently — a set's `pop()` removes an arbitrary element, a dict's `pop(key)` removes by key, and a list's `pop(index)` removes by position (last item by default).",
    code:
      "# Set\n" +
      "s = {1, 2, 3}\n" +
      "s.add(4); s.pop(); s.union({5, 6})\n" +
      "s.issubset({1, 2, 3, 4, 5, 6}); s.difference({2}); s.isdisjoint({9})\n\n" +
      "# Dictionary\n" +
      "d = {\"a\": 1, \"b\": 2}\n" +
      "d.get(\"a\"); d.setdefault(\"c\", 3); d.update({\"a\": 10})\n" +
      "d.keys(); d.values(); d.items(); d.popitem()\n\n" +
      "# List\n" +
      "l = [3, 1, 2]\n" +
      "l.append(4); l.insert(0, 0); l.sort(); l.reverse()\n" +
      "l.index(2); l.count(1); l.remove(1); l.extend([5, 6])",
    image: '/python-notes/important-methods-set-dict-list.jpg',
    imageAlt:
      'Important Methods in Python — three columns of built-in methods: Set (add, pop, copy, clear, union, issubset, issuperset, difference, intersection, isdisjoint, setdiscard), Dictionary (get, pop, copy, clear, items, values, update, setdefault, popitem, keys, fromkeys), and List (pop, sort, copy, append, insert, reverse, remove, extend, index, count, clear).',
  },
  {
    id: "nested-dictionary",
    title: "Nested Dictionary",
    content: "A dictionary can contain other dictionaries as values — useful for structured records. Access nested values by chaining keys, and loop with nested `for` over `.items()`.",
    code: "students = {\n    \"s1\": {\"name\": \"Raj\", \"age\": 25, \"course\": \"Python\"},\n    \"s2\": {\"name\": \"Anil\", \"age\": 35, \"course\": \"GEN AI\"},\n}\nprint(students[\"s1\"][\"name\"])\nprint(students[\"s2\"].get(\"course\"))\n\nfor student_id, data in students.items():\n    for key, value in data.items():\n        print(key, \"--\", value)\n    print(\"-----------\")",
  },
  {
    id: "what-is-a-string",
    title: "What is a String?",
    content: "A **string** stores **text data** — a **sequence of characters** (letters, numbers, symbols, or spaces). Strings are **ordered**, **immutable**, support **indexing** and **slicing**, allow duplicate characters, and can be created with single, double, or triple quotes.",
    code: "name = \"Ashok\"\nmsg = \"Hello, how are you?\"\ntext = \"\"\"\n    I am learning python\n    python is easy\n\"\"\"\n\nname = \"Python\"\nprint(len(name))\nprint(name[0], name[-1])\nprint(name[0:3])   # Pyt\nprint(name[3:])    # hon\n# name[0] = \"J\"    # Error — immutable\n\nfull_name = \"Ashok\" + \" \" + \"Bollepalli\"\nprint(full_name * 3)   # repetition",
  },
  {
    id: "string-methods",
    title: "String Methods",
    content: "Common string methods:\n- **upper() / lower() / title() / capitalize()** — change case\n- **strip() / lstrip() / rstrip()** — remove whitespace\n- **replace()** — replace text · **split()** — string → list · **join()** — list → string\n- **find() / index()** — position of a value (find returns -1, index errors if missing)\n- **count()**, **startswith()**, **endswith()**\n- **isdigit() / isalpha() / isalnum()** — validation\n- **format()** and **f-strings** — build strings with dynamic values",
    code: "message = \"I like Java\"\nprint(message.replace(\"Java\", \"Python\"))\n\nprint(\"Python,Java,DevOps\".split(\",\"))\nprint(\"#\".join([\"Python\", \"Java\", \"DevOps\"]))\n\ns = \"welcome to c and python\"\nprint(s.find(\"python\"))   # 11\nprint(s.find(\"z\"))        # -1\n\nmsg = \"Python is easy and Python is powerful\"\nprint(msg.count(\"Python\"), msg.startswith(\"Python\"), msg.endswith(\"Python\"))\n\nprint(\"85858658\".isdigit(), \"AshokIT\".isalpha(), \"India@123\".isalnum())",
  },
  {
    id: "string-formatting",
    title: "String Formatting & f-strings",
    content: "**String formatting** inserts variable values into a string — via commas, concatenation, **.format()**, or the cleanest option, **f-strings**.",
    code: "name = \"Ashok\"\ncourse = \"Python\"\n\nprint(\"Student name is\", name, \"and course is\", course)\nprint(\"Student name is {} and course is {}\".format(name, course))\n\n# f-string (preferred)\nmsg = f\"Student name is {name} and course is {course}\"\nprint(msg)",
    image: "/python-notes/python-tip-fstrings-day12.jpg",
    imageAlt: "Python Tip (Day 12/100, #100DaysOfCode Data Engineering Journey) — Use f-strings for Cleaner and More Readable Code: instead of string concatenation with + and str(), use an f-string like f\"Hello, {name}! You are on day {days} of your journey.\" Why use f-strings: more readable, less typing (no concatenation or str()), better performance than older formatting methods, and cleaner code. Note: f-strings are available in Python 3.6+ — always prefer modern, Pythonic ways.",
  },
  {
    id: "string-usecases",
    title: "String Use-Cases",
    content: "Handy string tasks: reversing a string, email validation, and generating a username from a name plus the last 4 digits of a phone number.",
    code: "text = \"python\"\nprint(\"\".join(reversed(text)))   # reverse\n\nemail = \"ashok@gmail.com\"\nif \"@\" in email and \".\" in email:\n    print(\"Valid Email\")\nelse:\n    print(\"Invalid Email\")\n\nname = \"Ashok\"\nphno = \"868686868\"\nusername = name.lower() + phno[-4:]\nprint(username)",
  },
  {
    id: "string-practice",
    title: "Practice Programs (Strings)",
    content: "Practice these classic string programs:\n1. Reverse a string\n2. Check if a string is a palindrome\n3. Count vowels and consonants\n4. Count occurrences of each character\n5. Remove duplicate characters\n6. Convert to uppercase without `upper()`\n7. Convert to lowercase without `lower()`\n8. Find the first non-repeated character\n9. Find the most repeated character\n10. Check anagram strings\n11. Count digits, letters, and special characters\n12. Reverse each word in a sentence\n13. Find the longest word in a sentence\n14. Count the frequency of each word",
  },
];

const PYTHON_CONTROL_SECTIONS = [
  {
    id: "what-are-control-statements",
    title: "Python Control Statements",
    content: "**Control statements** control the flow of execution in a program. Normally Python executes statements from **top to bottom**, but real applications need to execute code **based on conditions** or **repeat** code multiple times.\n\nPython control statements are divided into three types:\n1. **Conditional Statements**\n2. **Looping Statements**\n3. **Jumping Statements** (loop control)",
  },
  {
    id: "why-control-statements",
    title: "Why Do We Need Control Statements?",
    content: "Real applications need **decision-making** and **repetition**. Examples:\n1. If user logged in, show dashboard\n2. If marks > 35, show pass\n3. If balance is sufficient, allow withdrawal/transfer\n4. Print numbers 1 to 100\n5. Send certificates to all students\n6. Display all products in cart\n7. Search a student from a list\n8. Repeat login until the correct password is entered\n\nWithout control statements, programs cannot make decisions or repeat tasks.",
  },
  {
    id: "if-statement",
    title: "if Statement & Indentation",
    content: "The **`if`** statement executes a block of code **only when the condition is true**.\n\nPython uses **indentation** (spaces at the start of a line) to define blocks — a missing indent causes an error.\n\nSyntax:\n```\nif condition:\n    statement\n```",
    code: "age = 25\n\nif age >= 18:\n    print(\"Eligible to vote\")\n    print(\"plz participate in voting\")",
  },
  {
    id: "if-else",
    title: "if-else Statement",
    content: "**`if-else`** runs one block when the condition is true and another when it is false.\n\nSyntax:\n```\nif condition:\n    statement-1\nelse:\n    statement-2\n```",
    code: "age = 12\n\nif age >= 18:\n    print(\"Eligible to vote\")\nelse:\n    print(\"Not eligible to vote\")",
  },
  {
    id: "if-elif-else",
    title: "if-elif-else Statement",
    content: "When we need to check **multiple conditions** (e.g. grade bands), we use **`if-elif-else`**. Python checks each condition in order and runs the first true block; `else` is the default.",
    code: "marks = int(input(\"Enter marks: \"))\n\nif marks >= 90:\n    print(\"A Grade\")\nelif marks >= 75:\n    print(\"B Grade\")\nelif marks >= 65:\n    print(\"C Grade\")\nelif marks >= 35:\n    print(\"Just Pass\")\nelse:\n    print(\"Failed\")",
  },
  {
    id: "nested-if",
    title: "Nested if",
    content: "Writing one `if` statement **inside another** is called a **nested if** — useful for checks that depend on a previous condition (e.g. validate credentials, then check the role; or check balance, then the withdrawal amount).",
    code: "# login + role\nif username == \"admin\" and pwd == \"admin123\":\n    if role == \"student\":\n        print(\"student dashboard\")\n    elif role == \"trainer\":\n        print(\"trainer dashboard\")\n    elif role == \"admin\":\n        print(\"admin dashboard\")\nelse:\n    print(\"Invalid Credentials\")\n\n# ATM withdrawal\nbalance = 5000\nwithdraw_amount = int(input(\"Enter amount to withdraw: \"))\nif balance > 0:\n    if withdraw_amount <= balance:\n        balance = balance - withdraw_amount\n        print(\"Withdraw successful\")\n        print(\"Remaining balance: \", balance)\n    else:\n        print(\"Insufficient balance\")\nelse:\n    print(\"Funds not available\")",
  },
  {
    id: "match-case",
    title: "match-case",
    content: "**`match-case`** (Python 3.10+) is a clean way to run different code for different values — like a menu selection. The `case _:` acts as the default.",
    code: "print(\"1. Add Student\")\nprint(\"2. View Student\")\nprint(\"3. Update Student\")\nprint(\"4. Delete Student\")\n\nchoice = int(input(\"Enter your choice: \"))\n\nmatch choice:\n    case 1:\n        print(\"Student add operation selected\")\n    case 2:\n        print(\"Student View Operation selected\")\n    case 3:\n        print(\"Student Update Operation selected\")\n    case 4:\n        print(\"Student Delete Operation selected\")\n    case _:\n        print(\"Invalid Choice\")",
  },
  {
    id: "looping-for",
    title: "Looping Statements: for loop",
    content: "**Looping statements** execute a block of code **repeatedly**. Python has two loops: **`for`** and **`while`**.\n\nA **`for`** loop iterates over a **sequence** — a String, List, Tuple, Set, Dictionary, or Range.\n\nSyntax:\n```\nfor variable in sequence:\n    statements\n```",
    code: "for i in range(1, 6):\n    print(i)\n\n# over a string\nfor ch in \"Ashok\":\n    print(ch)\n\n# over a list\nfor student in [\"Ashok\", \"Ram\", \"John\"]:\n    print(student)\n\n# over a dictionary\nstudent = {\"id\": 101, \"name\": \"Ashok\", \"gender\": \"Male\"}\nfor key in student:\n    print(key, \"--\", student[key])",
  },
  {
    id: "range-function",
    title: "The range() Function",
    content: "**`range()`** generates a sequence of numbers. Three forms:\n- `range(stop)`\n- `range(start, stop)` — stop is exclusive\n- `range(start, stop, step)`",
    code: "for i in range(6):        # 0..5\n    print(i)\n\nfor i in range(1, 6):     # 1..5\n    print(i)\n\nfor i in range(1, 11, 2): # 1,3,5,7,9\n    print(i)\n\n# cart total\ncart_prices = [500, 300, 1200, 750]\ntotal = 0\nfor price in cart_prices:\n    total = total + price\nprint(\"Total Cart Price :: \", total)",
  },
  {
    id: "while-loop",
    title: "while Loop",
    content: "The **`while`** loop executes a block of code **as long as the condition is true**. You must update the loop variable yourself, or it becomes an infinite loop.\n\nSyntax:\n```\nwhile condition:\n    statements\n```",
    code: "count = 1\n\nwhile count <= 5:\n    print(count)\n    count = count + 1",
  },
  {
    id: "for-vs-while",
    title: "for loop vs while loop",
    content: "- Both repeat a block of code.\n- **for** — used when you know **how many times** to run; works with sequences (range, list, tuple, string); initialization/increment handled automatically; best for **fixed iterations**; less chance of an infinite loop.\n- **while** — used when you **don't know** exactly how many times; runs based on a **condition**; you handle init/increment manually; best for **condition-based iterations**; higher chance of an infinite loop if the condition isn't updated.",
  },
  {
    id: "break-statement",
    title: "Jumping Statements: break",
    content: "**Jumping statements** control loop execution — **`break`** and **`continue`**.\n\n**`break`** stops the loop **immediately** and comes out of it — useful for stopping a search once found.",
    code: "for i in range(1, 11):\n    if i == 5:\n        break\n    print(i)\n\n# stop searching once found\nstudents = [\"Raju\", \"John\", \"Steve\", \"Ashok\", \"Rani\"]\nsearch_name = \"Ashok\"\nfor student in students:\n    print(\"Checking :\", student)\n    if search_name == student:\n        print(\"Student Found :\", student)\n        break",
  },
  {
    id: "continue-statement",
    title: "continue",
    content: "**`continue`** **skips the current iteration** and moves to the next one — it does **not** stop the loop completely. Useful for skipping items that don't meet a condition.",
    code: "for i in range(1, 11):\n    if i == 5:\n        continue\n    print(i)\n\n# skip failed students\nstudents = [\n    {\"name\": \"Ravi\", \"marks\": 80},\n    {\"name\": \"Kiran\", \"marks\": 30},\n    {\"name\": \"Sita\", \"marks\": 90},\n]\nfor student in students:\n    if student[\"marks\"] < 35:\n        continue\n    print(\"Certificate Sent for :\", student[\"name\"])",
  },
  {
    id: "control-summary",
    title: "Summary",
    content: "Control statements covered:\n- **Conditional:** `if`, `if-else`, `if-elif-else`, nested `if`, `match-case`\n- **Looping:** `for` loop (with `range()`), `while` loop\n- **Jumping:** `break`, `continue`",
  },
];

const PYTHON_OPERATORS_SECTIONS = [
  {
    id: "what-are-operators",
    title: "Python Operators",
    content: "An **operator** is a symbol or keyword used to perform operations on values or variables — like addition, comparison, assignment, and logical checks.\n\n**Why we need operators:** calculate marks, compute total price (price + GST), check login credentials, check voting eligibility, apply coupon discounts, credit/debit an account balance, and more.\n\n**Types of operators:**\n1. **Arithmetic** (`+ - * / // % **`)\n2. **Assignment** (`=`, `+=`, `-=`, …)\n3. **Comparison** (`== != > >= < <=`)\n4. **Logical** (`and`, `or`, `not`)\n5. **Membership** (`in`, `not in`)\n6. **Identity** (`is`, `is not`)",
  },
  {
    id: "arithmetic-operators",
    title: "Arithmetic Operators",
    content: "**Arithmetic operators** perform mathematical operations: addition `+`, subtraction `-`, multiplication `*`, division `/`, **floor division** `//`, **modulus** `%` (remainder), and **power** `**`.",
    code: "a = 10\nb = 3\n\nprint(a + b)   # Addition: 13\nprint(a - b)   # Subtraction: 7\nprint(a * b)   # Multiplication: 30\nprint(a / b)   # Division: 3.3333\nprint(a // b)  # Floor Division: 3\nprint(a % b)   # Modulus / Remainder: 1\nprint(a ** b)  # Power: 1000",
  },
  {
    id: "assignment-operators",
    title: "Assignment Operators",
    content: "**Assignment operators** assign values to variables. `=` assigns, and compound operators like `+=`, `-=`, `*=`, `/=`, `//=`, `%=` update a variable in place (e.g. `x += 5` means `x = x + 5`).",
    code: "x = 10\nx += 5     # 15\nx -= 3     # 12\nx *= 2     # 24\nx /= 4     # 6.0\nx //= 2    # 3.0\nx %= 2     # 1.0\nprint(x)\n\n# account balance example\nbalance = 1000\nbalance += 500    # deposit\nbalance -= 200    # withdraw\nprint(\"Final balance : \", balance)",
  },
  {
    id: "comparison-operators",
    title: "Comparison Operators",
    content: "**Comparison operators** compare two values and return **`True`** or **`False`**: `==` (equal), `!=` (not equal), `>`, `<`, `>=`, `<=`.",
    code: "a = 10\nb = 20\n\nprint(a == b)   # False\nprint(a != b)   # True\nprint(a > b)    # False\nprint(a < b)    # True\nprint(a >= b)   # False\nprint(a <= b)   # True",
  },
  {
    id: "logical-operators",
    title: "Logical Operators",
    content: "**Logical operators** combine multiple conditions:\n- **`and`** — True only if **both** conditions are True\n- **`or`** — True if **at least one** is True\n- **`not`** — reverses the result",
    code: "age = 25\nsalary = 50000\n\nprint(age > 18 and salary > 30000)   # True (both true)\nprint(age > 18 or salary > 80000)    # True (one true)\nprint(not age > 18)                  # False (reverses True)",
  },
  {
    id: "membership-operators",
    title: "Membership Operators",
    content: "**Membership operators** check whether a value exists inside a sequence (list, tuple, string, etc.): **`in`** and **`not in`**.",
    code: "students = [\"Ashok\", \"Ramesh\", \"Suresh\"]\n\nprint(\"Ashok\" in students)       # True\nprint(\"Kiran\" in students)       # False\nprint(\"Kiran\" not in students)   # True",
  },
  {
    id: "identity-operators",
    title: "Identity Operators",
    content: "**Identity operators** compare the **memory location** of two objects (whether they are the same object): **`is`** and **`is not`**.",
    code: "a = 10\nb = 10\n\nprint(a is b)      # True\nprint(a is not b)  # False",
  },
];

const PYTHON_PROGRAMMING_ELEMENTS_SECTIONS = [
  {
    id: "python-keywords",
    title: "Python Keywords",
    content: "**Keywords** are reserved words in Python that have a **special meaning** — they define the syntax and structure of programs. We **cannot** use keywords as variable, function, class, or identifier names.\n\nExamples: `False, None, True, and, as, assert, async, await, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield`.",
    code: "import keyword\n\nprint(keyword.kwlist)         # all keywords\nprint(len(keyword.kwlist))    # count\n\nprint(keyword.iskeyword(\"hi\"))       # False\nprint(keyword.iskeyword(\"import\"))   # True",
  },
  {
    id: "python-literals",
    title: "Python Literals",
    content: "A **literal** is a fixed/constant value written directly in the program (e.g. `10`, `10.5`, `\"Python\"`, `True`, `None`).\n\n**Types of literals:**\n1. **Numeric** (int, float, complex)\n2. **String**\n3. **Boolean** (`True` / `False`)\n4. **None**\n5. **Collection** (list, tuple, set, dict)",
    code: "# numeric\nage = 25\nprice = 99.99\n\n# string (single, double, triple quotes)\nname = 'Ashok'\ncourse = '''It's Python course'''\nmsg = \"\"\"\n    Welcome to Python Training\n\"\"\"\n\n# boolean & None\nis_activated = True\nresult = None\n\n# collection literals\nstudents = [\"Ashok\", \"Ramesh\", \"Raju\"]      # list (mutable)\ncourses = (\"Python\", \"Java\", \"C++\")          # tuple (immutable)\ncities = {\"Hyd\", \"Pune\", \"Chennai\"}          # set (no duplicates)\nstudent = {\"id\": 101, \"name\": \"Ashok\"}       # dict\nprint(students, courses, cities, student)",
  },
  {
    id: "python-variables",
    title: "Python Variables",
    content: "A **variable** is a name used to store data — a memory reference that holds a value. In Python you **don't declare the type**; it is decided automatically based on the value.\n\n**Naming rules:** can contain letters, numbers, and underscore `_`; **can't** start with a number, contain spaces, use special symbols, or be a reserved keyword; names are **case-sensitive**.",
    code: "x = 10\nprint(x, type(x))\n\nname = \"Ashok\"\nprint(name, type(name))\n\n_mobile = 68686868\ncourse_fee = 4000",
  },
  {
    id: "multiple-assignment",
    title: "Multiple Assignment & Swapping",
    content: "Python lets you assign the **same value to multiple variables**, assign **different values in one line**, and **swap** variables without a temporary variable.",
    code: "# same value to many\nvar_1 = var_2 = var_3 = 100\n\n# different values in one line\nvar_8, var_9, var_10 = 80, 90, 100\n\n# swapping\na = 10\nb = 20\na, b = b, a\nprint(a, b)   # 20 10",
  },
  {
    id: "python-data-types",
    title: "Python Data Types",
    content: "A **data type** defines the kind of value a variable stores. Common types: **int, float, complex, str, bool, list, tuple, set, dict**. Use `type()` to check a value's type and `sys.getsizeof()` to see its memory size.",
    code: "import sys\n\nmy_age = 30\nprint(my_age, type(my_age), sys.getsizeof(my_age))\n\nprice = 99.99\nprint(price, type(price))\n\nnum = 5 + 3j            # complex\nprint(type(num))\n\nstudents = [\"Anil\", \"Sunil\", \"Anil\"]   # list\ncourses = (\"Java\", \"Python\")            # tuple\nskills = {\"Java\", \"Python\", \"Java\"}     # set (no duplicates)\nstudent = {\"id\": 101, \"name\": \"Ashok\"}  # dict\nprint(type(students), type(courses), type(skills), type(student))",
  },
  {
    id: "reading-input",
    title: "Reading Input From User",
    content: "**`input()`** is a built-in function that takes data from the keyboard during execution. **Important:** `input()` always returns a **string**, so `a + b` with two inputs **concatenates** them (e.g. `\"10\" + \"20\"` → `\"1020\"`). Use `.split()` to read multiple values on one line.",
    code: "name = input(\"Enter Your Name : \")\nage = input(\"Enter Your age : \")\nprint(\"My Name : \", name)\nprint(\"My Age : \", age)\n\n# two numbers on one line\na, b = input(\"Enter two numbers : \").split(\" \")\nprint(a, b)",
  },
  {
    id: "type-casting",
    title: "Type Casting",
    content: "**Type casting** converts a value from one data type to another. Because `input()` returns strings, we cast them to numbers (e.g. `int()`, `float()`) to do calculations.\n\n- **Implicit casting** — Python auto-converts (e.g. `int + float` → `float`).\n- **Explicit casting** — you convert manually with `int()`, `float()`, `str()`, `list()`, `tuple()`, `set()`, `dict()`.",
    code: "# without vs with casting\na = \"10\"\nb = \"20\"\nprint(a + b)               # \"1020\" (concatenation)\nprint(int(a) + int(b))     # 30 (addition)\n\n# collection casting\nprint(list(\"Python\"))                       # ['P','y','t','h','o','n']\nprint(tuple([10, 20, 30]))                  # (10, 20, 30)\nprint(set([10, 20, 10, 30]))                # {10, 20, 30}\nprint(dict([(\"name\", \"Ashok\"), (\"course\", \"Python\")]))\n\n# implicit\nresult = 10 + 2.5\nprint(result, type(result))   # 12.5 <class 'float'>",
  },
];

const PYTHON_INTRO_SECTIONS = [
  {
    id: "what-is-python",
    title: "What is Python?",
    content: "**Python** is a **high-level, general-purpose** programming language, widely used in the IT industry because it is **simple, powerful, easy to learn, and beginner-friendly**.\n\n**Why is Python so popular?** Its syntax is very close to English — a whole message can be printed in one simple line:\n`print(\"Hello World\")`\n\nIn many languages you'd write much more code to display one message; in Python it's a single line.",
    code: "print(\"Hello World\")",
  },
  {
    id: "history-of-python",
    title: "History of Python",
    content: "Python was created by **Guido van Rossum**. Development started in the late 1980s and it was first released in **1991**, designed to be simple, readable, and powerful.\n\n**Timeline:**\n- **1980s** — development started\n- **1991** — first release\n- **2000** — Python 2 released\n- **2008** — Python 3 released\n- **Today** — used across web, AI, data science, automation, DevOps, and backend\n\nPython 2 is old and no longer recommended; **Python 3** is the current, recommended version.",
  },
  {
    id: "features-of-python",
    title: "Features of Python",
    content: "1. **Simple and easy to learn**\n2. **Free and open source**\n3. **High-level language**\n4. **Platform independent**\n5. **Dynamically typed**\n6. **Object oriented** (class, object)\n7. **Powerful third-party libraries**",
  },
  {
    id: "python-usecases",
    title: "Python Use Cases",
    content: "Python is used almost everywhere:\n1. Web Development\n2. Data Science\n3. Machine Learning\n4. Artificial Intelligence\n5. Automation\n6. DevOps\n7. Cloud Computing\n8. Cyber Security\n9. Gaming\n10. Web Scraping\n11. API Development",
  },
  {
    id: "python-domains",
    title: "Python Across Domains & Libraries",
    content: "- **Web & APIs** — Django, Flask, FastAPI\n- **Data Science / AI / ML** — NumPy, Pandas, Matplotlib, Seaborn, SciPy, scikit-learn, TensorFlow, PyTorch, Keras\n- **Automation** — rename files, send emails, generate reports\n- **DevOps & Cloud** — server automation, log analysis, AWS automation, Docker/K8s scripts, CI/CD (boto3, fabric, requests)\n- **Cyber Security** — network scanning, security automation, malware analysis (scapy, cryptography, requests)\n- **Web Scraping** — BeautifulSoup, Scrapy\n- **Testing** — pytest, unittest, selenium",
  },
  {
    id: "python-setup",
    title: "Python Setup",
    content: "**1. Download** Python from the official site: https://www.python.org/downloads/ — pick the latest version for your OS.\n\n**2. Install** — run the installer and (very important) tick **\"Add Python to PATH\"** before clicking **Install Now**.\n\n**3. Verify** — in a terminal run `python --version` (or `py --version`); you should see `Python 3.x.x`.\n\n**4. Install an IDE** — PyCharm or Visual Studio Code. For beginners, PyCharm is easy for practice.",
    code: "# check the installed version\npython --version\n# or\npy --version",
  },
  {
    id: "execution-flow",
    title: "Python Program Execution Flow",
    content: "1. **Write code** in a `.py` file (e.g. `demo.py`).\n2. **Run** it: `python demo.py`.\n3. The **interpreter** reads and executes the program **line by line**.\n4. Source code is converted into **byte code** (an intermediate code).\n5. Byte code goes to the **PVM (Python Virtual Machine)**, which executes it and produces the output.\n\n**Flow:** Programmer → Source Code → Interpreter → Byte Code → PVM → Machine Code → Output.",
    code: "# demo.py\nprint(\"Hello Python\")\n\n# run it from the terminal:\n# python demo.py",
  },
  {
    id: "program-structure",
    title: "Python Program Structure",
    content: "A Python program is usually written step by step:\n1. **Comments**\n2. **import statements**\n3. **global variables**\n4. **Functions**\n5. **Function calls**",
    code: "# This is my first python program\nimport math\n\napp_name = \"python\"\nname = \"ashokit\"\n\ndef welcome():\n    print(\"Welcome to Python Training\")\n\nwelcome()",
  },
];

const PYTHON_DATA_SCIENCE_SECTIONS = [
  {
    id: "gen-ai-program-overview",
    title: "Program Overview: Gen AI + Agentic AI with Python",
    content: "This track builds your career in **Generative AI, Agentic AI, Python, LLMs, RAG systems, AI agents, LangChain, LangGraph, MCP, and MLOps** — taking learners from **basic level to advanced project development**, even with no prior programming experience.\n\n**Goal:** *Zero to Hero in Gen AI + Agentic AI with Python.*\n\n**No pre-requisites** — you'll learn Python from scratch, AI/ML fundamentals, Generative AI app development, RAG systems with vector DBs, AI agents and agentic workflows, real-time projects, deployment/MLOps basics, and interview preparation.",
  },
  {
    id: "gen-ai-course-content",
    title: "Course Content — 8 Modules",
    content: "1. **Python Programming** — core + advanced Python.\n2. **Python Libraries for AI** — NumPy, Pandas, Matplotlib, statistics, scikit-learn, TensorFlow, FastAPI.\n3. **Machine Learning & Deep Learning** — supervised/unsupervised/reinforcement learning, regression, classification, clustering, neural networks, CNN/RNN, transformers.\n4. **LLMs & Prompt Engineering** — tokens, context window, temperature, zero/few-shot & chain-of-thought prompting, OpenAI/Gemini/Claude APIs.\n5. **Generative AI & RAG Systems** — embeddings, vector databases, semantic search, RAG architecture, chatbots, document Q&A.\n6. **Agentic AI, LangChain, LangGraph, MCP & AI Agents** — chains, memory, tools, graph-based workflows, multi-agent systems.\n7. **MLOps + LLMOps** — Git, Docker, Kubernetes, CI/CD, cloud/model deployment, monitoring.\n8. **Interview Prep & Resume Building** — Python/ML/DL/Gen AI/LLM/RAG interview questions, resume, GitHub & LinkedIn.",
  },
  {
    id: "gen-ai-syllabus-python-foundations",
    title: "Official Syllabus — Python Foundations (Ashok IT)",
    content:
      "The official, module-by-module Ashok IT course syllabus — the full breakdown behind the 8-module summary above.\n\n**Course Introduction** — what we will learn in this course.\n\n**Introduction to Python** — getting started with Python, Python basics & syntax, variables in Python, basic data types in Python, operators in Python.\n\n**Python Control Flow** — conditional statements (`if`, `elif`, `else`), loops.\n\n**Data Structures Using Python** — lists and list comprehension, tuples, dictionaries, sets.\n\n**Functions in Python** — getting started with functions, lambda functions, the `map()` function, the `filter()` function.\n\n**Importing, Creating Modules & Packages** — importing modules and packages, a standard-library overview.\n\n**File Handling** — file operations with Python, working with file paths.\n\n**Exception Handling** — exception handling with `try` / `except` / `else` / `finally` blocks.\n\n**OOPs** — classes & objects, single and multiple inheritance, polymorphism, encapsulation, abstraction.",
  },
  {
    id: "gen-ai-syllabus-nlp-deep-learning",
    title: "Official Syllabus — NLP & Deep Learning Foundations",
    content:
      "**Machine Learning for Natural Language Processing (NLP)** — tokenization; text pre-processing (stemming, lemmatization, stopwords); text vectorization (Bag of Words, N-Grams, TF-IDF); word embeddings (Word2Vec, CBOW, Skip-Grams, GloVe); parts-of-speech tagging; named entity recognition.\n\n**Deep Learning for NLP** — welcome to the module on DL, introduction to DL, understanding deep learning.\n\n**Recurrent Neural Networks** — RNN forward propagation with time, simple RNN backward propagation, problems with RNN, end-to-end deep learning projects with a simple RNN.\n\n**Artificial Neural Networks** — what is a neuron, activation functions (step, linear, sigmoid, tanh, ReLU), backpropagation vs forward pass, gradient descent, ANN intuition, ANN hyperparameter optimization, step-by-step training with ANN (optimizer, loss functions, finding the optimal number of hidden layers & hidden neurons).",
  },
  {
    id: "gen-ai-syllabus-lstm-encoders-attention",
    title: "Official Syllabus — LSTM, Encoders, Decoders & Attention",
    content:
      "**Long Short-Term Memory (LSTM)** — why LSTM, LSTM architecture, the forget gate, the input gate and candidate memory, the output gate, the training process, variants of LSTM, an in-depth GRU/RNN intuition, and an end-to-end LSTM/GRU deep learning project.\n\n**Bidirectional RNN** — what it is, why to use it, advantages & disadvantages, applications.\n\n**Decoders** — introduction to decoders, decoder architecture, GPT architecture, GPT's masked multi-head attention, GPT training.\n\n**Encoders** — introduction to encoders, encoder architecture, introduction to BERT, BERT configurations, BERT fine-tuning, BERT pre-training (masked LM), BERT input embeddings, RoBERTa, DistilBERT, ALBERT.\n\n**Sequence to Sequence Architecture** — the encoder and decoder, an in-depth intuition of encoder & decoder, Seq2Seq architecture, problems with encoder-decoder.\n\n**Attention Mechanism** — Seq2Seq networks, attention mechanism architecture.",
  },
  {
    id: "gen-ai-syllabus-transformers-llms",
    title: "Official Syllabus — Transformers & Introduction to Gen AI",
    content:
      "**Transformers** — what and why to use transformers; the basic encoder architecture; self-attention layer working; multi-head attention; the feed-forward network with multi-head attention; positional encoding; layer normalization (with examples); the complete encoder transformer architecture; the decoder's plan of action; decoder masked multi-head attention; encoder-decoder multi-head attention; the decoder's final linear and softmax layer.\n\n**Introduction to Gen AI** — what generative AI is (AI vs ML vs DL vs Generative AI); how OpenAI's ChatGPT or Llama 3 LLM models are trained; the evolution of LLM models; an analysis of all major LLM models.\n\n**Data Preprocessing & Embeddings** — data preprocessing (cleaning, embeddings); the end-to-end generative AI pipeline.\n\n**Introduction to Large Language Models** — LLM architecture; an in-depth intuition of the transformer 'Attention Is All You Need' paper; how ChatGPT is trained.\n\n**Vector Database** — vector databases; vector index vs vector database; how a vector DB works; vector database practicals.",
  },
  {
    id: "gen-ai-syllabus-openai-langchain",
    title: "Official Syllabus — OpenAI, LangChain & Open-Source LLMs",
    content:
      "**Complete Guide to OpenAI** — introduction to OpenAI; the OpenAI API and generating an API key; local environment setup; hands-on with the Chat Completion API and the Completion API; function calling in OpenAI; **projects:** fine-tuning GPT-3 for text classification, audio-transcript translation with Whisper, image generation with DALL-E.\n\n**Introduction to Langchain for Generative AI** — the complete LangChain ecosystem; creating a virtual environment; getting started with LangChain & OpenAI.\n\n**Open Source LLM** — introduction to open-source LLMs (Llama); using open-source LLMs with LangChain; a custom website chatbot using open-source LLMs; open-source LLMs (Falcon).\n\n**Lang Chain — Basic to Advance** — introduction & installation setup; prompt templates; chains; LangChain agents and tools; memory in LangChain; document loaders; multi-DataFrame agents; using Hugging Face open-source LLMs with LangChain; **projects:** an interview-questions creator application, a custom website chatbot.\n\n**Components & Modules in Langchain** — basic components and modules; data ingestion with document loaders; text-splitting techniques (Recursive Character Text Splitter, Character Text Splitter, HTML Header Text Splitter, Recursive JSON Splitter); OpenAI embeddings, Ollama embeddings, and HuggingFace embeddings.",
  },
  {
    id: "gen-ai-syllabus-rag-finetuning-deployment",
    title: "Official Syllabus — RAG, Fine-Tuning & Deployment",
    content:
      "**Retrieval Augmented Generation (RAG)** — introduction & importance of RAG; a RAG practical demo; RAG vs fine-tuning; building a Q&A app with RAG using Gemini Pro and LangChain.\n\n**Fine Tuning LLMs** — what fine-tuning is; parameter-efficient fine-tuning (LoRA, QLoRA); fine-tuning Meta Llama 2 on custom data.\n\n**LlamaIndex — Basic to Advance** — introduction to LlamaIndex and an end-to-end demo; **project:** financial stock analysis using LlamaIndex.\n\n**LLM Apps Deployment** — how to deploy a generative AI application, using Flask and AWS.",
  },
  {
    id: "gen-ai-syllabus-agentic-ai-langgraph-mcp-n8n",
    title: "Official Syllabus — Agentic AI, LangGraph, MCP & n8n",
    content:
      "**Introduction to Agentic-AI** — what Agentic AI is; AI agents vs Agentic AI; memory & planning; agentic architecture; types of agents; multi-agent systems.\n\n**Introduction to LangGraph** — introduction to LangGraph; LangGraph applications; setting up API keys; developing a simple graph/workflow with LangGraph; LangGraph components; **project:** an end-to-end Agentic AI project with LangGraph.\n\n**Model Context Protocol** — introduction to MCP; important MCP components; communication between MCP components; building MCP servers with tools & a client from scratch using LangChain.\n\n**n8n** — introduction to automation & n8n; key features; n8n hosting techniques; n8n essentials; n8n node types (trigger, action, data-transformation, switch/filter, split/aggregate).\n\n**Agentic AI Workflow in n8n** — the concept of workflow; how to give prompts to an AI agent; credential setup & testing.",
  },
  {
    id: "what-is-data-science",
    title: "What is Data Science?",
    content: "**Data** is the starting point of Data Science. Using data we create **intelligence**, and using intelligence we build systems that can learn from data, understand language, generate content, make predictions, and take actions.\n\n**Definition:** Data Science is the process of **collecting, cleaning, analyzing, and understanding data to make smart decisions** — in short, *extracting useful information from data*.",
  },
  {
    id: "data-science-lifecycle",
    title: "Data Science Life Cycle",
    content: "1. **Collect Data** — from files, databases, websites, sensors, apps, and APIs.\n2. **Clean Data** — remove duplicates, missing/incorrect values, and unwanted information.\n3. **Analyze Data** — find patterns, trends, and relationships.\n4. **Visualize Data** — charts, graphs, dashboards, reports.\n5. **Build Model** — create an ML model for the problem.\n6. **Train Model** — learn patterns from historical data.\n7. **Test Model** — verify predictions.\n8. **Deploy Model** — make it available for real-time use.\n9. **Monitor Results** — observe performance and improve.",
  },
  {
    id: "what-is-ai",
    title: "What is Artificial Intelligence?",
    content: "**AI** is a branch of Data Science and Computer Science that aims to create machines/systems that can **think and act like humans** — performing tasks that normally require human intelligence.\n\nUnlike normal programming (where we tell the computer exactly what to do), in AI the machine **observes data, learns from patterns, improves over time, and makes decisions on its own**.",
  },
  {
    id: "ai-real-life-examples",
    title: "AI Real-Life Examples",
    content: "1. Self-driving cars\n2. Fraud detection in banks\n3. Spam detection in emails\n4. ChatGPT answering questions and generating images\n5. GitHub Copilot generating code\n6. Voice assistants (Siri, Alexa, Google Assistant)\n7. Product recommendations (Amazon, Flipkart)\n8. Movie recommendations (Netflix, YouTube)",
  },
  {
    id: "why-ai-important",
    title: "Why is AI Important Today?",
    content: "AI helps us **automate repetitive tasks, reduce human errors, save time and cost, improve decision-making, work faster and more accurately, and build smart applications**.\n\nIt's used across almost every industry: medicine, farming, finance, education, e-commerce, banking, software development, and transportation.",
  },
  {
    id: "what-is-ml",
    title: "What is Machine Learning?",
    content: "**Machine Learning** is a subset of AI that lets computers **learn patterns from data** without explicitly programming every condition.\n\n**Definition:** a technique where the computer learns from data and makes predictions or decisions. We give it a large amount of data, it finds patterns, and uses those patterns to predict/decide.\n\nUnlike normal programming's fixed rules, ML **learns from examples and data**.",
  },
  {
    id: "ml-examples",
    title: "Machine Learning Examples",
    content: "**Cat vs Dog classification** — show the model 1000 cat/dog images; after training it can identify a new image.\n\n**Email spam filter** — the model learns from thousands of emails (spam vs safe) and later flags spam automatically.\n\n**Daily life:** Netflix/YouTube recommendations, Google Photos face/object recognition, Amazon/Flipkart product suggestions, credit-card fraud detection, and Google Maps traffic/route prediction.",
  },
  {
    id: "how-ml-works",
    title: "How Machine Learning Works",
    content: "ML projects generally follow four steps:\n1. **Collect Data** — images, text, numbers, websites, databases, APIs.\n2. **Train the Model** — the model learns patterns from data.\n3. **Test the Model** — check whether predictions are correct.\n4. **Use the Model** — make predictions on new, unseen data.\n\n**Summary:** Learn from data → improve over time → make predictions.",
  },
  {
    id: "what-is-deep-learning",
    title: "What is Deep Learning?",
    content: "**Deep Learning** is a subset of Machine Learning that uses **artificial neural networks** (inspired by the human brain) to learn from large amounts of data. It's part of ML but far more powerful for **complex problems**.",
  },
  {
    id: "ml-vs-dl",
    title: "Machine Learning vs Deep Learning",
    content: "**Machine Learning**\n- Subset of AI; learns from data using algorithms\n- Works well with small–medium, mostly **structured** data\n- Faster training; easier to understand and explain\n\n**Deep Learning**\n- Subset of ML; uses neural networks with many layers\n- Needs **huge** data; excels at **unstructured** data (images, audio, video, text)\n- Slower training; better accuracy for complex problems",
  },
  {
    id: "where-dl-used",
    title: "Where is Deep Learning Used?",
    content: "1. **Face Recognition** — detect and recognize faces\n2. **Speech to Text** — convert spoken words to text\n3. **Text to Speech** — convert text to voice\n4. **Self-Driving Cars** — detect signals, signs, pedestrians, vehicles\n5. **Medical Diagnosis** — detect diseases from X-rays, MRIs, scans\n6. **Chatbots & AI Assistants** — understand questions and generate human-like responses",
  },
  {
    id: "when-ml-vs-dl",
    title: "When to Use ML vs Deep Learning",
    content: "**Use Machine Learning when:** data is limited, the problem is simple, the model must be explainable, extreme accuracy isn't critical, and data is mostly structured. *(e.g. loan approval, churn prediction, sales forecasting, spam detection.)*\n\n**Use Deep Learning when:** large data is available, data is images/audio/video/text, the problem is complex, high accuracy matters, and GPU hardware is available. *(e.g. face recognition, voice assistants, image classification, self-driving cars, generative AI.)*",
  },
  {
    id: "what-is-nlp",
    title: "What is NLP?",
    content: "**NLP (Natural Language Processing)** is a branch of AI that helps computers **understand, interpret, and generate human language** — teaching computers to understand English, Telugu, Hindi, or any human language.\n\nHumans communicate with language, emotion, tone, and grammar; computers understand numbers (0s and 1s). **NLP is the bridge** between them. With NLP, computers can read text, listen to speech, understand meaning, analyze emotions, generate answers, translate languages, summarize documents, and extract information.",
  },
  {
    id: "nlp-examples",
    title: "NLP Real-Life Examples",
    content: "- **ChatGPT & Gemini** — understand questions and generate human-like answers\n- **Google Translate** — convert one language to another\n- **Siri & Alexa** — understand spoken commands and respond\n- **Email Spam Detection** — identify spam vs safe\n- **Sentiment Analysis** — classify customer feedback as positive, negative, or neutral",
  },
  {
    id: "what-is-generative-ai",
    title: "What is Generative AI?",
    content: "**Generative AI** creates **new content** — text, code, images, audio, video, reports, email templates. Unlike traditional AI (which classifies, predicts, or detects), Gen AI learns patterns from huge data and **generates original content** that looks human-made.\n\n**Examples:** ChatGPT (text), MidJourney/DALL·E (images), Suno (music), RunwayML (video), GitHub Copilot (code), Gamma (presentations). Train it on 1000 songs and it can create a new song that isn't a copy of any single one.",
  },
  {
    id: "what-is-agentic-ai",
    title: "What is Agentic AI?",
    content: "**Agentic AI** can **think, decide, and take actions on its own** to achieve a goal — used to build intelligent AI assistants/agents. Traditional AI only answers questions; Agentic AI can **plan + act + complete tasks independently**.\n\n- **Gen AI** — only generates content, needs a user prompt, static response.\n- **Agentic AI** — takes actions toward goals, can work autonomously, interactive and decision-making (like a *digital worker*).\n\n**Examples:** an AI that books flights after comparing prices, reads emails and drafts replies, deploys apps (DevOps agent), resolves customer issues end-to-end, or schedules meetings.",
  },
  {
    id: "ds-ai-summary",
    title: "Summary: Data → DS → AI → ML → DL → NLP / Gen AI",
    content: "These technologies build on each other:\n- **Data Science** — find useful insights from data for smart business decisions.\n- **AI** — the big umbrella; makes systems intelligent.\n- **ML** — systems learn from existing data and predict on new data.\n- **DL** — ML using neural networks for complex data.\n- **NLP** — AI that understands human language.\n- **Gen AI** — AI that creates new content.\n- **Agentic AI** — AI that takes actions (AI agents).\n\n**In short:** Data → Data Science → AI → ML → DL → NLP / Gen AI applications — the foundation of modern tools like ChatGPT, Gemini, self-driving cars, recommendation and fraud-detection systems.",
  },
  {
    id: "parquet-file-basics",
    title: "Parquet File Basics",
    content:
      "**What is Parquet?** Parquet is an open-source **columnar** file format, designed for efficient storage and analytics on big data. Developed by Twitter and now an Apache project, it works with any data processing engine (Spark, Presto, Trino, Pandas). It's optimized for analytics, not for fast row-level writes.\n\n**Parquet file structure:**\n- **Footer** (at the end) — contains metadata and schema, and points to all row groups.\n- **Row Groups** — horizontal partitions of data (default size around 128MB).\n- **Column Chunks** (inside a row group) — each column stored separately, encoded and compressed.\n- **Magic Number** (`PAR1`) — identifies the file as Parquet, at both the start and end of the file.\n\n**How Parquet stores data:** a row-oriented table (`id`, `name`, `age`, `city`) is stored column by column instead — all `id` values together, all `name` values together, and so on. Each column is stored separately and compressed.\n\n**Why columnar?**\n- **Better performance** — read only the required columns, less I/O, faster aggregations, ideal for analytics.\n- **Better compression** — similar values are stored together, giving a higher compression ratio and less storage cost.\n- Read less. Process less. Save more.\n\n**Inside a row group:** each column chunk is split into **Pages** (Page 1, Page 2, … Page N) — pages are the smallest unit read from disk.\n\n**Key features:** columnar storage (read only what you need), compression (Snappy, Gzip, ZSTD, LZ4, Brotli), self-describing schema support (in the footer), efficient encoding (Dictionary, RLE, Delta, Bit Packing), splittable (enables parallel processing), nested data support (arrays, maps, structs), and cross-platform (language & engine agnostic).\n\n**Compression vs Encoding** (both reduce file size, in different ways):\n- **Compression codecs** — Snappy (fast), Gzip (better ratio), ZSTD (best balance), LZ4 (very fast), Brotli (high ratio).\n- **Encoding schemes** — Dictionary Encoding, Run-Length Encoding (RLE), Delta Encoding, Bit Packing, Plain Encoding.\n- Right combination = smaller files, faster reads, lower cost.\n\n**A Parquet file, conceptually:** data is often **partitioned** in a folder structure to speed up queries — e.g. `data/year=2024/month=06/part-00001.parquet`, `part-00002.parquet`, …, `data/year=2024/month=07/part-50001.parquet`. Each individual `.parquet` file itself has a Footer (metadata), one or more Row Groups (e.g. 128MB each), and ends with the `PAR1` magic number.\n\n**Advantages:** high performance for analytics, reduced storage cost, scalable for big data, works with many engines, self-describing & schema-evolution friendly.\n\n**Limitations:** not efficient for row-level updates; schema changes sometimes require rewriting data; not suitable for many small files (overhead).\n\n**Parquet vs other formats:**\n- **Storage format** — Parquet: columnar; CSV: row; JSON: row; ORC: columnar.\n- **Compression** — Parquet: high; CSV: low; JSON: low; ORC: high.\n- **Schema support** — Parquet: yes; CSV: no; JSON: no; ORC: yes.\n- **Splittable** — Parquet: yes; CSV: no; JSON: no; ORC: yes.\n- **Analytics performance** — Parquet: excellent; CSV: poor; JSON: poor; ORC: excellent.\n- **Best for** — Parquet: analytics; CSV: interchange; JSON: interchange; ORC: big data (Hadoop).\n\n**Best practices:** use an appropriate row group size (128MB–512MB), choose the right compression codec (ZSTD/Snappy), partition your data properly, avoid too many small files, and use column pruning & predicate pushdown.\n\n**Parquet read flow, simplified:** Query → Read Footer → identify the relevant Row Groups & Column Chunks → read only the required pages → return the result. Only the required columns and relevant data are read.\n\n**Golden takeaway:** Parquet isn't just a file format — it's a smart way to store data for analytics at scale. Store less. Read less. Process less. That's the power of Parquet!",
    code: "import pandas as pd\n\n# Write a DataFrame to Parquet (columnar, compressed)\ndf = pd.DataFrame({\n    \"id\": [1, 2, 3],\n    \"name\": [\"Alice\", \"Bob\", \"Carol\"],\n    \"age\": [25, 30, 28],\n    \"city\": [\"Delhi\", \"Mumbai\", \"Pune\"],\n})\ndf.to_parquet(\"users.parquet\", engine=\"pyarrow\", compression=\"snappy\")\n\n# Read only the columns you need — Parquet skips the rest entirely\nresult = pd.read_parquet(\"users.parquet\", columns=[\"id\", \"city\"])\nprint(result)\n\n# Partitioned dataset — one folder per year/month, like a real data lake\ndf[\"year\"] = 2024\ndf[\"month\"] = 6\ndf.to_parquet(\"data/\", engine=\"pyarrow\", partition_cols=[\"year\", \"month\"])\n# -> data/year=2024/month=6/part-*.parquet",
    image: "/python-notes/parquet-file-basics.jpg",
    imageAlt:
      "Learn Parquet File in 90 Seconds — by Omkar Desai. 1. What is Parquet (open-source columnar format, developed by Twitter, now Apache, works with Spark/Presto/Trino/Pandas). 2. Parquet File Structure (Footer, Row Groups, Column Chunks, Magic Number PAR1). 3. How Parquet Stores Data (an example id/name/age/city table stored column by column). 4. Why Columnar (better performance and better compression). 5. Inside a Row Group (column chunks split into pages). 6. Key Features (columnar storage, compression, schema support, efficient encoding, splittable, nested data support, cross-platform). 7. Compression & Encoding (Snappy/Gzip/ZSTD/LZ4/Brotli vs Dictionary/RLE/Delta/Bit Packing/Plain encoding). 8. Parquet File Example — conceptual folder partitioning by year/month. 9. Advantages and Limitations. 10. Parquet vs Others comparison table (Parquet, CSV, JSON, ORC across storage format, compression, schema support, splittable, analytics performance, best-for). 11. Best Practices. 12. Parquet Read Flow simplified (query → read footer → identify row groups & column chunks → read required pages only → return result). Ends with a Golden Takeaway: Parquet is a smart way to store data for analytics at scale.",
  },
];

const PYTHON_REST_API_SECTIONS = [
  {
    id: "what-is-webservice",
    title: "What is a Web Service?",
    content: "**Web services** are used to develop **distributed applications** — if one application communicates with another application, we call it a distributed application.\n\n- Passport ↔ AADHAR App\n- MakeMyTrip ↔ IRCTC App\n- GPay ↔ Banking App\n\nEvery distributed application should maintain **interoperability**:\n- JAVA App ↔ Python App\n- Python App ↔ .NET App\n- .NET App ↔ Java App\n- Angular App ↔ JAVA / Python / .NET / Node JS\n- React App ↔ JAVA / Python / .NET / Node JS\n\n**Interoperability** means that irrespective of platform and language, if applications are communicating with each other, we call them interoperable applications.",
  },
  {
    id: "why-distributed-applications",
    title: "Why Develop Distributed Applications?",
    content: "Distributed applications are used for **Business to Business communication (B2B)** — we can reuse the functionality of one project inside another project.\n\n**Example 1:** the IRCTC project contains the business logic to book train tickets. The MakeMyTrip application communicates with IRCTC to book train tickets — MakeMyTrip is **re-using** IRCTC's booking logic instead of rebuilding it.\n\n**Example 2:** OpenAI developed the GPT model (LLM). Other applications can use the GPT model for their own AI implementation, without training a model of their own.\n\nDistributed applications can be developed in **2 ways**:\n1. **SOAP Web Services** — outdated.\n2. **RESTful Services** — trending.",
  },
  {
    id: "what-is-rest-api",
    title: "What is a REST API?",
    content: "- **API** stands for **Application Programming Interface**.\n- **REST** stands for **Representational State Transfer**.\n- A **REST API** defines a set of rules to establish business-to-business communication.\n- Using a REST API, we can provide business services to other applications.\n\nA REST API defines **how to access one application from another application**:\n- What is the URL pattern\n- What type of request\n- What is the request data\n- What is the response data",
  },
  {
    id: "rest-api-architecture",
    title: "REST API Architecture — Provider & Consumer",
    content: "A REST API architecture has two sides:\n1. **Provider**\n2. **Consumer**\n\n**Provider** is the application that provides business services to other applications. **Consumer** is the application that accesses business services from other applications.\n\n- IRCTC is a **provider**; MakeMyTrip and Yatra are **consumers**.\n- The OpenAI GPT project is a **provider**; an Ashok IT web app is a **consumer**.\n\nWe use **JSON** to exchange data between the provider and the consumer.",
  },
  {
    id: "what-is-json",
    title: "JSON — the Data Exchange Format",
    content: "- **JSON** stands for **JavaScript Object Notation**.\n- JSON represents data in **key-value** format.\n- JSON is **very lightweight**.\n- JSON is **platform independent** and **language independent**.\n- JSON is used to transfer data over a network — distributed applications use JSON data for both the request and the response.",
    code: "{\n\t\"id\" : 101,\n\t\"name\" : \"Ashok\",\n\t\"phone\" : 8686868\n}",
  },
  {
    id: "json-module-in-python",
    title: "Working with JSON in Python",
    content: "Python has an in-built **`json`** module to work with JSON data:\n\n- **`json.dumps()`** — converts a Python object into a JSON string.\n- **`json.dump()`** — writes a Python object into a JSON file.\n- **`json.loads()`** — converts a JSON string into a Python object.\n- **`json.load()`** — reads a JSON file and converts it into a Python object.",
    code: "import json\n\nstudent = {\n    \"id\": 101,\n    \"name\": \"Ravi\",\n    \"course\": \"Python\",\n    \"fee\": 15000\n}\n\nstudent_json = json.dumps(student, sort_keys=True, indent=4)\nprint(student_json)\nprint(type(student_json))\n\nprint(\"--------------------------------\")\n\nstudent = json.loads(student_json)\nprint(student)\nprint(type(student))\n\nprint(\"--------------------------------\")\n\nwith open(\"student.json\", \"w\") as file:\n    json.dump(student, file, indent=10)\n\nprint(\"JSON file created successfully\")\n\nprint(\"--------------------------------\")\n\nwith open(\"student.json\", \"r\") as file:\n    student = json.load(file)\n    print(student)",
  },
  {
    id: "what-is-http",
    title: "What is HTTP?",
    content: "**HTTP** stands for **Hyper Text Transfer Protocol** — it acts as the **mediator between client and server**.\n\n**HTTP is a stateless protocol** — it can't remember the conversation that happened between client and server; every request is treated independently.\n\nTo develop REST APIs, we need to know these HTTP concepts:\n1. HTTP Request Structure\n2. HTTP Response Structure\n3. HTTP Methods\n4. HTTP Status Codes",
  },
  {
    id: "http-request-response-structure",
    title: "HTTP Request & Response Structure",
    content: "**HTTP Request** contains:\n1. **Request Line** — HTTP method + server URL.\n2. **Request Headers** — metadata, in key-value format.\n3. **Request Body** — the payload (text / XML / JSON).\n\n**HTTP Response** contains:\n1. **Response Line** — status code + status message.\n2. **Response Headers** — metadata, in key-value format.\n3. **Response Body** — the payload (text / XML / JSON).",
  },
  {
    id: "http-methods",
    title: "HTTP Methods",
    content: "The 5 core HTTP methods:\n1. **GET** — get data from the server (no request body).\n2. **POST** — send data to the server (creates a new record).\n3. **PUT** — update a record (complete record update).\n4. **PATCH** — partial record update.\n5. **DELETE** — delete a record at the server.",
  },
  {
    id: "http-status-codes",
    title: "HTTP Status Codes",
    content: "Status codes are grouped by their first digit:\n- **2xx (200–299)** — Success.\n- **4xx (400–499)** — Client error.\n- **5xx (500–599)** — Server error.",
  },
  {
    id: "developing-rest-api-with-fastapi",
    title: "Developing a REST API Using FastAPI",
    content: "**Step 1** — create a Python project.\n**Step 2** — create a `requirements.txt` file inside the project.\n**Step 3** — configure the required libraries in `requirements.txt`.\n**Step 4** — create and activate a virtual environment.\n**Step 5** — install the libraries in the venv using `pip`.\n**Step 6** — create an `app.py` file with the REST endpoint methods.\n**Step 7** — run the application using `uvicorn`.\n**Step 8** — test the application using Swagger documentation at `http://localhost:8000/docs`.\n\nWhen you hit that URL, **FastAPI automatically generates API documentation** — what endpoints are available, which HTTP methods they're mapped to, the request parameters, request data format, and response data format. You can also **test the REST endpoints directly from Swagger**.\n\nYou can use **Postman** for API testing too — it won't auto-generate documentation, so you need to provide the API details to Postman yourself before sending a request.",
    code: "pip install -r requirements.txt\n\n# run the app (reloads on code changes)\nuvicorn main:app --reload",
  },
  {
    id: "fastapi-first-endpoints",
    title: "FastAPI — Your First Endpoints",
    content: "A minimal FastAPI app: create the app instance, then decorate a function with `@app.get(\"/path\")` to map it to a **GET** endpoint. The function's return value (a dict) is automatically sent back as **JSON**.",
    code: "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get(\"/welcome\")\ndef get_welcome_msg():\n    return {\"message\": \"Welcome to FastAPI\"}\n\n@app.get(\"/greet\")\ndef get_greet_msg():\n    return {\"message\": \"Good Morning\"}",
  },
  {
    id: "fastapi-get-api-example",
    title: "GET API Example",
    content: "A **GET** API is used to **fetch data from the server**. The function returns a Python dict and FastAPI serialises it to JSON automatically.\n\nWhen using a GET request, data can be sent to the server **in the URL** using two options:\n1. **Path Parameter** — data embedded directly in the URL path.\n2. **Query Parameter** — data appended after `?` in the URL.",
    code: "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get(\"/course\")\ndef get_course():\n    return {\n        \"course\": \"Gen AI with Python\",\n        \"duration\": \"3 Months\",\n        \"trainer\": \"Ashok\"\n    }\n\n# URL: http://127.0.0.1:8000/course",
  },
  {
    id: "fastapi-path-parameter",
    title: "Path Parameter",
    content: "**Path parameters** are used to send data **directly embedded in the URL**. You declare its position in the URL template using `{param_name}`, and FastAPI automatically reads and type-checks it.\n\nIf no matching resource is found, raise an `HTTPException` with status `404`.",
    code: "from fastapi import FastAPI, HTTPException\nfrom courses import courses\n\napp = FastAPI()\n\n@app.get(\"/courses\")\ndef get_all_courses():\n    return courses\n\n@app.get(\"/courses/{course_id}\")\ndef get_course(course_id: int):\n    course = courses.get(course_id)\n    if course is None:\n        raise HTTPException(\n            status_code=404,\n            detail=\"Course not found\"\n        )\n    return course",
  },
  {
    id: "fastapi-query-parameter",
    title: "Query Parameter",
    content: "**Query parameters** are passed after `?` in the URL, separated by `&`.\n\nRules:\n- Query parameters start with `?`.\n- Multiple parameters are separated by `&`.\n- Query parameters must appear **at the end** of the URL.\n\nExample URL: `http://localhost:8000/course-search?search=stack`\n\nFastAPI maps the URL parameter name directly to the function argument name.",
    code: "@app.get(\"/course-search\")\ndef search_course(search: str):\n    result = []\n    for course_id, course in courses.items():\n        if search.lower() in course[\"course_name\"].lower():\n            result.append({\n                \"course_id\": course_id,\n                **course\n            })\n    return result\n\n# URL: http://localhost:8000/course-search?search=stack",
  },
  {
    id: "fastapi-post-api-request-body",
    title: "POST API with Request Body",
    content: "**POST** is used to send data to the server. FastAPI uses **Pydantic models** to receive and validate the request body data automatically.\n\nDefine a class that inherits from `BaseModel` — FastAPI reads the JSON request body, validates the types, and injects the validated object into your function.",
    code: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Course(BaseModel):\n    course_id: int\n    course_name: str\n    course_price: int\n\n@app.post(\"/course\", status_code=201)\ndef create_course(course: Course):\n    # logic to insert data into db\n    return {\n        \"message\": \"Course created\",\n        \"course\": course\n    }",
  },
  {
    id: "fastapi-crud-with-mysql",
    title: "CRUD REST API with MySQL Database",
    content: "A full CRUD project with FastAPI + MySQL. Project structure:\n- `requirements.txt` — library list (`fastapi`, `uvicorn`, `mysql-connector-python`).\n- `db.py` — all database logic (connection, table creation, CRUD functions).\n- `main.py` — FastAPI app with REST endpoints.\n\n**Key patterns:**\n- `@app.on_event(\"startup\")` — runs `create_table()` once when the app starts.\n- `Field(..., min_length=3)` — Pydantic field-level validation.\n- `cursor(dictionary=True)` — returns rows as dicts instead of tuples.\n- `base_path = \"/api\"` — prefix all routes consistently.\n- `uvicorn main:app --reload` — run the server with hot-reload.",
    code: "# db.py\nimport mysql.connector\n\ndef get_connection():\n    return mysql.connector.connect(\n        host=\"localhost\", user=\"root\",\n        password=\"root\", database=\"pydb\"\n    )\n\ndef create_table():\n    conn = get_connection()\n    cursor = conn.cursor()\n    cursor.execute(\"\"\"\n        CREATE TABLE IF NOT EXISTS STUDENTS(\n            ID INT AUTO_INCREMENT PRIMARY KEY,\n            NAME VARCHAR(100) NOT NULL,\n            COURSE VARCHAR(100) NOT NULL,\n            FEE DECIMAL(10,2) NOT NULL\n        )\n    \"\"\")\n    cursor.close(); conn.close()\n\ndef create_student(student):\n    conn = get_connection(); cursor = conn.cursor()\n    cursor.execute(\n        \"INSERT INTO STUDENTS(name, course, fee) VALUES(%s,%s,%s)\",\n        (student.name, student.course, student.fee)\n    )\n    conn.commit(); cursor.close(); conn.close()\n    return {\"success\": True, \"data\": student}\n\ndef get_students():\n    conn = get_connection()\n    cursor = conn.cursor(dictionary=True)\n    cursor.execute(\"SELECT * FROM STUDENTS\")\n    students = cursor.fetchall()\n    cursor.close(); conn.close()\n    return {\"success\": True, \"data\": students}\n\ndef get_student_by_id(id: int):\n    conn = get_connection()\n    cursor = conn.cursor(dictionary=True)\n    cursor.execute(\"SELECT * FROM STUDENTS WHERE ID=%s\", (id,))\n    student = cursor.fetchone()\n    cursor.close(); conn.close()\n    return {\"success\": bool(student), \"data\": student}\n\n# main.py\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel, Field\nimport db\n\napp = FastAPI()\nbase_path = \"/api\"\n\n@app.on_event(\"startup\")\ndef startup(): db.create_table()\n\nclass Student(BaseModel):\n    name: str = Field(..., min_length=3, max_length=15)\n    course: str = Field(..., min_length=3, max_length=15)\n    fee: float = Field(..., gt=0)\n\n@app.post(f\"{base_path}/student\", status_code=201)\ndef create_student(student: Student):\n    return db.create_student(student)\n\n@app.get(f\"{base_path}/students\")\ndef get_all_students():\n    return db.get_students()\n\n@app.get(f\"{base_path}/students/{{student_id}}\")\ndef get_student_by_id(student_id: int):\n    return db.get_student_by_id(student_id)",
  },
  {
    id: "consuming-rest-apis-with-requests",
    title: "Consuming REST APIs Using Python requests",
    content: "Python's popular **`requests`** library lets you send HTTP requests programmatically from a consumer application.\n\nThe `requests` library supports:\n1. Sending HTTP requests (GET, POST, PUT, DELETE).\n2. Accessing response content (`response.text`, `response.json()`).\n3. JSON processing.\n4. Passing headers and query parameters.\n\nInstall with: `pip install requests`\n\n**`params` dict** — pass query parameters as a dictionary; `requests` appends them to the URL automatically.",
    code: "import requests\n\n# Basic GET request\napi_url = \"https://jsonplaceholder.typicode.com/users\"\nresponse = requests.get(api_url)\nprint(\"Status Code:\", response.status_code)\nprint(response.text)\n\n# -------------------------------------------\n\n# GET with query parameters\ncity = \"Hyderabad\"\napi_url = \"https://geocoding-api.open-meteo.com/v1/search\"\nparams = {\"name\": city, \"count\": 1}\nresponse = requests.get(api_url, params=params)\nprint(response.text)\n\n# -------------------------------------------\n\n# Weather API — combine two requests\nlatitude = 17.38405\nlongitude = 78.45636\nurl = \"https://api.open-meteo.com/v1/forecast\"\nparams = {\n    \"latitude\": latitude,\n    \"longitude\": longitude,\n    \"current\": \"temperature_2m,relative_humidity_2m,wind_speed_10m\",\n    \"timezone\": \"auto\"\n}\nresponse = requests.get(url, params=params)\nprint(response.text)",
  },
];

// Reference syllabus — Agentic AI 3.0 (Krish Naik Academy), a separate 5-phase
// program (agenticai3.lovable.app), attached to the Phase-1 intro as a
// reference/comparison syllabus. Does NOT replace the Ashok IT curriculum
// this phase actually follows below.
const AGENTIC_AI_3_REFERENCE_SECTIONS = [
  {
    id: "agentic-ai-3-reference-syllabus",
    title: "Reference Syllabus — Agentic AI 3.0 (Krish Naik Academy)",
    content:
      "A separate reference program — **Agentic AI & GenAI-AgentOps with Cloud 3.0**, by Krish Naik Academy (Krish Naik — Chief AI Engineer, Mayank Aggrawal — Senior ML Engineer). The modern, direct path to mastering Agentic AI, from foundations to production multi-agent systems on **AWS, GCP, Azure, and VPS**. **5 months · 30 modules · 9 projects · 3 clouds**, beginner+, ~6 hrs/week, with a Python & AI fast-track in Phase 0.\n\n**Prerequisites:** no prior Agentic AI knowledge required — but you should have a good foundational understanding of GenAI along with the fundamentals of Machine Learning, Deep Learning & NLP.\n\n**Five phases, each stacking on the last:**\n\n**Phase 0 — Foundations** (Weeks 1–3 · 4 modules): build the foundation — Python, GenAI, prompting & structured outputs. You'll master GenAI vs Agentic AI (agent design patterns), Python + async fast-track for AI, Pydantic for tool schemas & structured outputs, and Prompt Engineering (CoT, few-shot, structured prompts). Roles unlocked: GenAI Intern, AI Associate, Prompt Engineer (Jr.).\n\n**Phase 1 — Core Frameworks & Protocols** (Weeks 4–9 · 9 modules + 2 projects): become production-ready with the core agent stack used in industry. You'll master LangChain + LCEL (end-to-end LLM pipelines), LangGraph (stateful, human-in-the-loop agents), Multi-Agent Architecture (Supervisor, Swarm), and MCP & A2A protocols, Agentic RAG, Context Engineering. Roles unlocked: AI Engineer, LLM Application Developer, RAG Engineer.\n\n**Phase 2 — Claude Ecosystem & Coding Agents** (Weeks 10–13 · 6 modules + 1 project): master the Claude ecosystem & next-gen autonomous coding agents. You'll master Claude Code, OpenClaw, NemoClaw, Hermes, Codex CLI, opencode, Antigravity IDE, mem0 (persistent agent memory), and building self-improving coding agents. Roles unlocked: Agentic Coding Engineer, Autonomous Agent Developer.\n\n**Phase 3 — Extended Frameworks** (Weeks 14–17 · 7 modules + 3 mini-projects): go cross-framework — ship agents in any ecosystem your team uses. You'll master OpenAI Agents SDK, CrewAI, Google ADK, AWS Strands, LlamaIndex workflows, and n8n & LangFlow (low-code agent automation), across 3 mini-projects. Roles unlocked: Multi-Framework AI Engineer, Agent Solutions Architect.\n\n**Phase 4 — Production Cloud Projects** (Weeks 18–22 · 1 module + 3 projects): deploy real production systems on AWS, GCP & Azure with full AgentOps. You'll master AgentOps CI/CD (observability, evals, cost), production deploy on Bedrock/Vertex AI/AI Foundry, Docker/FastAPI/GitHub Actions/BentoML, across 3 in-depth, portfolio-grade cloud projects. Roles unlocked: Senior Agentic AI Engineer, AgentOps / MLOps Engineer, AI Platform Engineer.",
  },
  {
    id: "agentic-ai-3-tech-stack-and-projects",
    title: "Agentic AI 3.0 — Tech Stack & the 9 Projects",
    content:
      "**Stack inventory — 56 tools across 9 categories:**\n- **Agent Frameworks (9)** — LangChain, LangGraph, OpenAI Agents SDK, Google ADK, AWS Strands, CrewAI, LlamaIndex, n8n, LangFlow.\n- **Claude & Coding Agents (7)** — Claude Code, OpenClaw, NemoClaw, Hermes Agent, Codex CLI, opencode, Antigravity IDE.\n- **Protocols & Standards (2)** — MCP, A2A.\n- **Memory & Knowledge (4)** — mem0, LangGraph Checkpointing, LlamaIndex Memory, GraphRAG.\n- **AgentOps & Observability (5)** — AgentOps, LangSmith, Opik, Langfuse, Logfire.\n- **Core Concepts (11)** — RAG, Agentic RAG, Context Engineering, Prompt Engineering, Pydantic, Vector DBs, Agent Evaluation, Agent Security, Guardrails, FAISS, Tavily.\n- **Deployment & CI/CD (7)** — Docker, GitHub Actions, FastAPI, BentoML, Nginx, Streamlit, Gradio.\n- **Cloud Platforms (4)** — AWS, GCP, Azure, VPS.\n- **LLM Providers (7)** — OpenAI, Anthropic, Gemini, Groq, Ollama, Bedrock, Azure OpenAI.\n\n**All 9 portfolio projects, across AWS, GCP, Azure, VPS, and local environments:**\n- **Phase 1, AWS** — Customer Support RAG Agent (LangGraph + LangChain).\n- **Phase 1, VPS** — Research Assistant Agent (LangGraph + Adaptive RAG).\n- **Phase 2, VPS** — Personal AI Assistant / Claude Ecosystem (Hermes Agent + Claude Code).\n- **Phase 3, Docker Compose** — Automated Content Intelligence Agent (OpenAI Agents SDK + CrewAI).\n- **Phase 3, GCP Cloud Run** — Multi-Source Data Analysis Agent (Google ADK + LlamaIndex).\n- **Phase 3, AWS Lambda + VPS** — Intelligent Sales Workflow Automation (AWS Strands + n8n + LangFlow).\n- **Phase 4, AWS** — Multi-Agent Business Intelligence System (AWS Strands Agents SDK).\n- **Phase 4, GCP** — Enterprise Knowledge Graph Assistant (Google ADK).\n- **Phase 4, Azure** — Multi-Agent Customer Intelligence Platform (CrewAI).",
  },
];

// Reference syllabus — Professional Certificate Programme in Agentic AI and
// Applications (IITM Pravartak, a Technology Innovation Hub of IIT Madras, in
// collaboration with Emeritus + IBM). A separate 5-month, 21-module program —
// attached to the Phase-1 intro as a reference/comparison syllabus. Does NOT
// replace the Ashok IT curriculum this phase actually follows above.
const IITM_PRAVARTAK_AGENTIC_AI_SECTIONS = [
  {
    id: "iitm-pravartak-agentic-ai-overview",
    title: "Reference Syllabus — Professional Certificate in Agentic AI and Applications (IITM Pravartak)",
    content:
      "Another separate reference program — the **Professional Certificate Programme in Agentic AI and Applications**, by **IITM Pravartak** (a Technology Innovation Hub of IIT Madras), in collaboration with **Emeritus**, with additional certification from **IBM**. Domain expert led teaching — learn to deploy functional agents through real-world AI projects. **5 months · 21 modules · 20+ real-world projects · 30+ tools · 3 IBM certifications**, 8–10 hrs/week, starting 5 August 2026.\n\n**Programme summary:**\n- **Cost** — INR 1,40,000 + GST / AED 6,234, with basic instalment plans and up to 10% fee benefit for bulk enrolments.\n- **Eligibility** — minimum graduate (10+2+3); diploma holders with min. 5 years of work experience; basic math and programming knowledge preferred.\n- **Learning mode** — weekly live sessions by domain experts (core curriculum, on weekends), plus weekly live masterclasses by IITM Pravartak lead faculty (additional, on weekdays).\n- **Campus immersion** — a two-day optional campus immersion event at the IIT Madras Research Park (only for participants who complete the programme).\n- **Capstone project** — a one-week capstone project for application-based problem-solving: design, build, and demo a fully functional AI agent (with RAG, memory, tools, and deployment).\n- **Certification** — a verified digital certificate from IITM Pravartak, plus 3 IBM certificates, upon successful completion (70% qualifying mark, 50% attendance, capstone completed).\n- **Career support** — Emeritus Career Services: resume builder automation, LinkedIn profile optimisation, career preparation modules, and interview prep (15 recorded sessions, not live).\n\n**Who should enrol:** AI and Data Professionals (data scientists, ML engineers, developers, tech leads moving beyond model-building into goal-oriented, memory-enabled agents); Product and Innovation Leaders (product managers, automation leads, entrepreneurs designing low-code/no-code intelligent assistants); Domain Experts and Functional Specialists (professionals embedding AI agents into daily operations). Beginner-friendly — foundational Python coding is taught in the early modules.\n\n**Programme Director:** Prof. Madhusudhanan Baskaran — Principal AIML Consultant and Lead Faculty at IITM Pravartak, specialising in Agentic AI, generative systems, and intelligent automation, with 32+ years of experience across academia, industry, and government (portfolio includes AI-led projects for the Supreme Court of India, CAG, ReBIT, and the Indian Army).\n\n**With this programme, you'll be able to:** master building intelligent AI agents that can plan, reason, act, and adapt; get hands-on with LangChain, CrewAI, and AutoGen; transform static AI into smart, goal-driven systems using GenAI, RAG, prompt engineering, and adaptive feedback loops; deploy and optimize your own agents with memory, tools, and monitoring; and become a future-ready AI builder through custom multi-agent workflows.\n\n**Tools & libraries covered (30+):** Jupyter, LangChain, CrewAI, Flowise, LangFlow, Streamlit, OpenAI, Hugging Face, AutoGen Studio, Chroma, Replit, LangChain + FastAPI, LangChain Memory, PromptLayer, Teachable Machine, Gradio, Transformers, scikit-learn, FAISS, and TensorFlow Playground, among others.\n\n**3 IBM Certifications:**\n1. **RAG: Vector Databases with ChromaDB** — course introduction, RAG framework, prompt engineering and LangChain.\n2. **Responsible and Ethical Generative AI** — limitations and ethical issues of generative AI, social and economic impact and responsible generative AI.\n3. **Generative AI for Business and Professionals** — generative AI in business (trends, ideas, implementation), and generative AI's impact and opportunities for career growth.",
  },
  {
    id: "iitm-pravartak-agentic-ai-modules-1-11",
    title: "IITM Pravartak Agentic AI — Modules 1–11",
    content:
      "**Module 1 — Getting Started with Python and ChatGPT:** installing Python and Jupyter; what ChatGPT is and how to use it for coding help; live Python installation and first program; ChatGPT for debugging and code explanations. **Tools:** Python, Jupyter, ChatGPT. **Project:** use ChatGPT to create a function that extracts keywords from a sentence.\n\n**Module 2 — Data Types, Variables and Control Flow:** numbers, strings, lists, dictionaries, loops and conditionals; live coding a decision-making chatbot; loop exercises and variable tracing. **Tools:** Python Tutor, Replit, ChatGPT. **Project:** a user-input based chatbot that gives greetings or advice based on age/gender input.\n\n**Module 3 — Functions and Working with Libraries:** defining functions, arguments and returns; importing and using libraries; working with NumPy and Pandas; modular coding, reusing logic across files, building a calculator CLI, calling a public API, working with data. **Tools:** Jupyter, Python. **Project:** getting weather data in Python.\n\n**Module 4 — Fundamentals of AI and ML:** AI vs ML vs DL, supervised and unsupervised learning, neural networks intro, reinforcement learning basics, search and optimisation in AI agents. **Tools:** Google Teachable Machine, Scikit-learn, TensorFlow Playground. **Project:** use a visual tool to create a basic classifier (image or sentiment) and share insights.\n\n**Module 5 — Large Language Models (LLMs):** what LLMs are, transformer architecture overview, tokenisation and embeddings, context windows and memory limits, basics of prompt engineering, visualising attention in transformers. **Tools:** OpenAI Playground, HuggingFace Spaces, LangChain (prompt templates), tokeniser visualisers. **Project:** a prompt engineering challenge comparing how different prompts produce different results for the same task.\n\n**Module 6 — Embedding Models and Vector Basics:** what embeddings are, token vectors vs sentence embeddings, distance metrics (cosine, Euclidean), similarity search, visualising embeddings with PCA/t-SNE, building basic vector search with OpenAI embeddings and FAISS. **Tools:** OpenAI Embeddings, HuggingFace Transformers, FAISS, LangChain Embedding Functions, ChromaDB. **Project:** a mini 'document similarity finder' using embeddings and FAISS/ChromaDB.\n\n**Module 7 — Agentic Tools in Python:** basics of LangChain, the OpenAI API, prompt formatting and response parsing; building a simple tool-using agent (calculator + search tool); prompt templates introduction. **Tools:** LangChain, OpenAI, Python. **Project:** a mini assistant using a calculator tool that answers 'How many hours in X days?'.\n\n**Module 8 — Introduction to Agentic AI:** what Agentic AI is, autonomous AI vs traditional AI, agent lifecycle and capabilities, types of autonomy, real-world agent examples (assistants, planners, scouts), rule-based systems vs agents. **Tools:** Flowise, AutoGen Studio (demos). **Project:** a reflection sheet identifying 3 areas in your work/life where an AI agent can help.\n\n**Module 9 — Programming and Frameworks for Agentic Systems:** agents vs functions vs APIs; an overview of LangChain, AutoGen, and CrewAI; tool abstraction and orchestration basics; how agents call external tools via APIs; visual orchestration with LangFlow or Flowise; agent execution tracing and debugging. **Tools:** LangChain, AutoGen, CrewAI, Flowise, LangFlow, OpenAgents. **Project:** build a basic tool-using agent (calculator or web-search wrapper) via code or a visual builder.\n\n**Module 10 — Agent Architectures and Collaboration:** reactive, deliberative, and hybrid agents; multi-agent system fundamentals; task-oriented vs goal-oriented agents; agent communication and reasoning frameworks; a CrewAI/AutoGen multi-agent demo; simulating agent collaboration (e.g. writer + editor). **Tools:** CrewAI, AutoGen, LangChain Agents, AgentVerse. **Project:** design a two-agent team for a collaborative task (e.g. research + summarisation) with clear roles.\n\n**Module 11 — Decision-Making and Planning in Agents:** goal setting and planning in autonomous agents; hierarchical vs reactive planning; multi-agent strategies; reinforcement loops in planning; live agent-planning demo with CrewAI/LangChain; a travel-planning scenario simulation with constraints. **Tools:** LangChain Agents (PlannerAgent), CrewAI, AutoGen Planning Loops. **Project:** build a simple goal-oriented planner agent (event scheduler or itinerary builder) with fallback handling.",
  },
  {
    id: "iitm-pravartak-agentic-ai-modules-12-21",
    title: "IITM Pravartak Agentic AI — Modules 12–21 & Capstone",
    content:
      "**Module 12 — Memory and Knowledge Retrieval in Agents with MCP:** short-term vs long-term memory; vector stores and embedding storage; semantic similarity and chunking; the Retrieval-Augmented Memory (RAG) loop; building an agent with short-term + long-term memory; a customer-support memory case study; an MCP demo. **Tools:** ChromaDB, Pinecone, LangChain Memory, FAISS, OpenAI Embeddings. **Project:** a memory-augmented agent for document Q&A or repeat-user tracking.\n\n**Module 13 — Prompt Engineering and Adaptive Instructions:** zero-shot, one-shot, and few-shot prompting; chain-of-thought prompting; instruction tuning basics; dynamic prompt construction; modular prompt assembly with LangChain/Flowise; fixing a badly-behaving agent by rewriting its prompt. **Tools:** OpenAI Playground, LangChain PromptTemplates, Flowise, PromptLayer. **Project:** a Prompt Design Challenge — 3 versions of a task-solving prompt (basic, step-by-step, role-specific), evaluated against each other.\n\n**Module 14 — Learning and Adaptation in Agents:** reinforcement learning fundamentals; RLHF (Reinforcement Learning with Human Feedback); reward systems for agents; adaptive behaviour tuning; feedback loops in task agents; hardcoded vs adaptive behaviours. **Tools:** OpenAI API (temperature tuning), LangChain + feedback loops, RL demo environments (CleanRL, Gridworld). **Project:** define a reward mechanism for a hypothetical agent (support agent or recommender) and simulate its improvement logic.\n\n**Module 15 — Advanced Retrieval-Augmented Generation (RAG):** RAG architecture overview; combining retrieval and generation flows; contextual embeddings and relevance ranking; customising RAG for Q&A and summarisation; connecting an embedding model + vector store + LLM chain; tuning RAG to reduce hallucination; debugging a failing RAG agent. **Tools:** LangChain RAG Chain, ChromaDB/Pinecone, HuggingFace Transformers, Flowise. **Project:** build a custom RAG-powered assistant answering questions from a given knowledge base (PDF, text, or URL dump).\n\n**Module 16 — Deploying and Monitoring Agentic Systems:** hosting options (cloud, serverless, embedded); API deployment walk-through; latency optimisation basics; monitoring principles; deploying on Hugging Face, Streamlit, or LangChain + FastAPI; adding observability with LangSmith or OpenTelemetry. **Tools:** Hugging Face Spaces, Streamlit, LangChain + FastAPI, LangSmith, Render/Replit. **Project:** deploy your own agent (Q&A bot or planner) on a cloud/no-code platform and test it live with users.\n\n**Module 17 — Agent Evaluation and Debugging:** why agent evaluation is hard; key metrics (task success, coherence, correctness, coverage, latency); logging and tracing basics; manual vs automated evaluation; tracing and inspecting errors with LangSmith; designing a custom evaluation rubric. **Tools:** LangSmith, PromptLayer, AutoGen logs, LangChain Tracing, Gradio logs. **Project:** evaluate a given agent using a checklist/rubric and submit improvement recommendations and patch changes.\n\n**Module 18 — Ethics, Safety and Governance in Agentic AI:** what responsible AI is; risks with autonomous agents (bias, hallucinations, misuse); data privacy and consent for agent interactions; designing a safety layer (rate limiting, content filtering); reviewing real-world agent failures and ethical breaches. **Tools:** OpenAI Moderation API, Guardrails AI, an AI Fairness Checklist, and an Ethics Cards Toolkit. **Project:** design an agent with built-in safety mechanisms (content moderation or intent validation) and document the autonomy-vs-control trade-offs.\n\n**Module 19 — Real-World Applications and Case Studies:** agent use cases across business, education, healthcare, customer support, and research; the ROI of agent adoption; success stories and failure lessons; a business-workflow-automation demo (lead qualifier or research assistant). **Tools:** OpenAgents, LangChain Hub, Flowise, CrewAI templates, Streamlit demos. **Project:** identify a relevant agent use case in your own domain and outline a basic agent design with roles, tools, and outcomes.\n\n**Module 20 — Low-Code Tools Deep Dive:** what low-code/no-code agent tools are; pros and cons of visual pipelines; intro to Flowise, LangFlow, and AutoGen Studio; when to use low-code over code; visual node linking, memory blocks, and prompt templates. **Tools:** Flowise, LangFlow, AutoGen Studio, OpenAgents (UI), LangChainHub visual flows. **Project:** use Flowise to build a planner agent that fetches event info, stores it in memory, and gives recommendations — submit a visual flow screenshot and the agent's output.\n\n**Module 21 — Capstone Project: Build Your Own Agent:** project guidelines and a success checklist; project templates (research agent, planner, assistant, tutor, etc.); deployment and UI-wrapping tips; peer idea reviews; breakout-room mentorship; final presentations and feedback. **Tools:** LangChain, Flowise, CrewAI, OpenAI, Streamlit, Hugging Face, ChromaDB, Pinecone. **Project:** design, build, and demo a fully functional AI agent tailored to a use case, with RAG, memory, tools, and deployment.",
  },
];

export const pythonLessons = [
  // ── Phase 1: Python Foundations ──
  {
    pyDay: 1,
    phase: 'Python Foundations',
    title: 'Course Introduction',
    subtitle: 'What we will learn in Gen AI & Agentic AI with Python',
    topics: ['Course roadmap', 'AI vs ML vs DL', 'Tools & setup', 'Python for AI', 'Project overview'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=rfscVS0vtbw', 'Learn Python - Full Course', 'freeCodeCamp'),
    sections: [...AGENTIC_AI_3_REFERENCE_SECTIONS, ...IITM_PRAVARTAK_AGENTIC_AI_SECTIONS],
    extraLinks: [
      {
        label: 'Agentic AI and Applications Brochure — IITM Pravartak (PDF)',
        href: '/python-notes/iitm-pravartak-agentic-ai-brochure.pdf',
        icon: '📄',
      },
    ],
  },
  {
    pyDay: 2,
    phase: 'Python Foundations',
    title: 'Introduction to Python',
    subtitle: 'Getting started, syntax, variables, data types, and operators',
    topics: ['Getting started with Python', 'Syntax & variables', 'Basic data types', 'Operators', 'First programs'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=_uQrJ0TkZlc', 'Python for Beginners', 'Programming with Mosh'),
    sections: [
      ...PYTHON_INTRO_SECTIONS,
      ...PYTHON_PROGRAMMING_ELEMENTS_SECTIONS,
      ...PYTHON_OPERATORS_SECTIONS,
    ],
    extraLinks: [
      {
        label: 'Complete Handwritten Notes on Python (PDF) — CodeWithCurious.com',
        href: '/python-notes/complete-handwritten-notes-on-python.pdf',
        icon: '📄',
      },
      {
        label: 'Python Fundamentals — Handwritten Notes (PDF)',
        href: '/python-notes/python-fundamentals-handwritten-notes.pdf',
        icon: '📄',
      },
    ],
  },
  {
    pyDay: 3,
    phase: 'Python Foundations',
    title: 'Python Control Flow',
    subtitle: 'Conditional statements and loops',
    topics: ['if, elif, else', 'for loops', 'while loops', 'break & continue', 'Nested conditions'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=HZajxHrdjSU', 'Python Control Flow', 'Bro Code'),
    sections: PYTHON_CONTROL_SECTIONS,
  },
  {
    pyDay: 4,
    phase: 'Python Foundations',
    title: 'Data Structures in Python',
    subtitle: 'Lists, tuples, dictionaries, sets, and comprehensions',
    topics: ['Lists & comprehension', 'Tuples', 'Dictionaries', 'Sets', 'Choosing structures'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=HGOBQpZYwaE', 'Python Data Structures', 'CS Dojo'),
    sections: PYTHON_DATA_STRUCTURES_SECTIONS,
  },
  {
    pyDay: 5,
    phase: 'Python Foundations',
    title: 'Functions in Python',
    subtitle: 'Functions, lambda, map, and filter',
    topics: ['Defining functions', 'Parameters & return', 'Lambda functions', 'map()', 'filter()'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=9Os0o3wzssI', 'Python Functions', 'Corey Schafer'),
    sections: [
      ...PYTHON_FUNCTIONS_SECTIONS,
      {
        id: 'functions-in-python-reference',
        title: 'Functions in Python — Visual Reference',
        content:
          "Functions help you write **reusable and organized code** — instead of repeating the same code, put it in a function and call it whenever needed. This one-page reference covers the essentials:\n\n- **Define & call** — `def` creates a function; call it by name (`greet()`).\n- **Parameters & arguments** — functions accept inputs; you can pass **multiple** parameters (`def add(a, b)`).\n- **Return** — `return` sends a value back to the caller (very important in real projects).\n- **Default parameters** — assign defaults (`def country(name=\"India\")`) so arguments are optional.\n- **Lambda functions** — small anonymous one-liners (`square = lambda x: x * x`), common in data analysis & automation.\n- **Recursion** — a function calling itself (with a base case to stop).\n- **Variable scope** — **local** (inside a function) vs **global** (outside) variables.\n- **Modules & imports** — organize code into files; use `import math` or `from random import randint` to reuse built-in and external libraries.\n\n**Common beginner mistakes:** forgetting indentation, missing a return statement, confusing parameters and arguments, and infinite recursion. **Pro tip:** write small, reusable functions with meaningful names.",
        code: "# define & call\ndef greet(name=\"Python\"):   # default parameter\n    return f\"Hello, {name}\"\nprint(greet())            # Hello, Python\n\n# multiple params + return\ndef add(a, b):\n    return a + b\nprint(add(10, 20))        # 30\n\n# lambda\nsquare = lambda x: x * x\nprint(square(4))          # 16\n\n# recursion\ndef countdown(n):\n    if n == 0:\n        return\n    print(n)\n    countdown(n - 1)\ncountdown(5)              # 5 4 3 2 1\n\n# modules\nimport math\nprint(math.sqrt(25))      # 5.0",
        image: '/python-notes/python-functions-part3.jpg',
        imageAlt: 'Functions in Python visual reference — what a function is (def and call), function parameters and multiple parameters, the return statement, default parameters, lambda functions, recursion basics, variable scope (local vs global), modules in Python, import statements, practice programs, and common beginner mistakes',
      },
    ],
  },
  {
    pyDay: 6,
    phase: 'Python Foundations',
    title: 'Python Libraries Introduction',
    subtitle: 'Modules, packages, standard libraries, and popular third-party libraries',
    topics: ['import statements', 'Creating modules', 'Packages', 'Standard library', 'pip basics', 'NumPy, Pandas, FastAPI, Streamlit'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=CqvZ3vGoGs0', 'Python Modules', 'Corey Schafer'),
    sections: PYTHON_MODULES_SECTIONS,
  },
  {
    pyDay: 7,
    phase: 'Python Foundations',
    title: 'File Handling',
    subtitle: 'File operations and working with file paths',
    topics: ['open() & read/write', 'with context manager', 'File paths', 'CSV & JSON files', 'os module'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=Uh2ebFW8OYM', 'Python File Handling', 'Corey Schafer'),
    sections: [
      {
        id: 'file-handling-and-json',
        title: 'File Handling & JSON in Python',
        content:
          "Reading, writing, storing, and exchanging structured data using files and JSON.\n\n**Opening & reading** — `with open('file.txt', 'r') as f:` then `f.read()` (whole file), loop `for line in f` (line by line), or `f.readlines()` (list of lines).\n\n**Writing** — `'w'` overwrites, `'a'` appends, and `f.writelines(lines)` writes many lines.\n\n**File modes** — `'r'` read (default), `'w'` write/truncate, `'a'` append, `'x'` create (fail if exists), `'b'` binary, `'t'` text (default), `'+'` read & write. Combine, e.g. `'rb'`, `'w+'`.\n\n**Always use `with open(...)`** — it opens the file safely and closes it automatically even if an error occurs.\n\n**JSON** (JavaScript Object Notation) — a lightweight, human-readable, language-independent, key-value format supporting nested objects and arrays. Write with `json.dump(data, f, indent=4)` (indent makes it pretty) and read with `data = json.load(f)`.\n\n**Real-world uses** — app settings/profiles, API data exchange, configuration files, data logging, and ETL pipelines.\n\n**Best practices** — use `with open(...)`, pick the right mode, `json.dump` with `indent`, handle exceptions with `try/except`, keep JSON keys consistent, and validate JSON before processing.\n\n**Common mistakes** — forgetting to close files (use `with`!), using `'w'` instead of `'a'` and losing data, not handling `FileNotFoundError`, assuming JSON is always valid, and writing binary data in text mode.",
        image: '/python-notes/file-handling-and-json.jpg',
        imageAlt: 'File Handling and JSON in Python — problem statement, use cases, opening & reading files, writing files, file modes, with open(), JSON basics, JSON read/write code examples, file workflow diagram, real-world use cases, best practices, and common mistakes & trade-offs',
      },
      {
        id: 'what-is-file-handling',
        title: 'What is File Handling?',
        content: "**File handling** is used to create, read, write, update, and delete files using a Python program.\n\nA **file** is used to store data **permanently** — normal variables store data only temporarily, but files store data permanently in system storage.\n\n**Examples:** student records, employee details, course details, logs, reports, configuration data.",
      },
      {
        id: 'types-of-files',
        title: 'Types of Files — Text vs Binary',
        content: "Python mainly works with two types of files:\n\n**1. Text files** — store data in readable text format.\n- Examples: `.txt`, `.csv`, `.json`, `.py`, `.html`\n- e.g. `students.txt`, `courses.txt`, `employees.csv`\n\n**2. Binary files** — store data in binary format.\n- Examples: images, videos, audio files, PDF files\n- e.g. `photo.jpg`, `video.mp4`, `resume.pdf`",
      },
      {
        id: 'file-handling-steps-and-open',
        title: 'File Handling Steps & the open() Function',
        content: "File handling usually contains **3 steps**:\n1. Open file / create file\n2. Perform operation\n3. Close file\n\n**`open()`** is used to open a file — `open(\"file_name\", \"mode\")`. The **mode** specifies the operation:\n- `r` — read\n- `w` — write\n- `a` — append\n- `x` — create\n- `r+` — read and write\n- `w+` — write and read\n- `a+` — append and read\n- `rb` — read binary file\n- `wb` — write binary file\n- `ab` — append binary file\n\n**Reading methods:**\n- `read()` — reads the complete file data at once.\n- `read(number)` — reads a specific number of characters.\n- `readline()` — reads one line at a time.\n- `readlines()` — reads all lines and returns a list.\n\n**Writing methods:** `write()` and `writelines()`.",
      },
      {
        id: 'reading-files-in-python',
        title: 'Reading Files — for Loop, read() & readlines()',
        content: "Looping over a file object directly reads it **line by line** — the most memory-efficient way to read a large file.",
        code: "file = open(\"students.txt\", \"r\")\n\nfor line in file:\n    print(line)\n\nfile.close()",
      },
      {
        id: 'write-and-writelines-methods',
        title: 'write() & writelines() Methods',
        content: "**`write()`** writes data into a file.",
        code: "file = open(\"courses.txt\", \"w\")\n\nfile.write(\"Python\\n\")\nfile.write(\"Java\\n\")\nfile.write(\"DevOps\\n\")\n\nfile.close()\n\n# Output: courses.txt will contain the course names.",
      },
      {
        id: 'writelines-method-detail',
        title: 'writelines() — Writing Multiple Lines at Once',
        content: "**`writelines()`** is used to write multiple lines into a file.\n\n**Important:** `writelines()` does **not** add a newline automatically — we should add `\\n` manually to each item.",
        code: "courses = [\"Python\\n\", \"Java\\n\", \"DevOps\\n\"]\n\nfile = open(\"courses.txt\", \"w\")\n\nfile.writelines(courses)\n\nfile.close()\n\n# Output: courses.txt will contain all courses.",
      },
      {
        id: 'close-method',
        title: 'close() Method — Why It Matters',
        content: "**`close()`** is used to close the file. **Always close the file after a file operation.**\n\n`close()` is important because it:\n- releases system resources.\n- saves pending data into the file.\n- avoids file corruption.\n- is a good programming practice.",
        code: "file = open(\"students.txt\", \"r\")\n\ndata = file.read()\n\nprint(data)\n\nfile.close()",
      },
      {
        id: 'file-handling-using-with',
        title: 'File Handling Using with',
        content: "The **`with`** statement is the best way to handle files — it automatically closes the file after the operation, even if an error occurs.\n\nSyntax:\n```\nwith open(\"filename\", \"mode\") as file:\n    # file operation\n```",
        code: "with open(\"students.txt\", \"r\") as file:\n    data = file.read()\n    print(data)\n\nwith open(\"courses.txt\", \"w\") as file:\n    file.write(\"JAVA\\n\")\n    file.write(\"PYTHON\\n\")\n    file.write(\"GEN AI\\n\")",
      },
      {
        id: 'check-delete-rename-files',
        title: 'Check, Delete & Rename Files',
        content: "The **`os`** module lets us manage files on disk.\n\n**Check if a file exists** — `os.path.exists(\"filename\")`.\n\n**Delete a file** — `os.remove(\"filename\")` (check it exists first).\n\n**Rename a file** — `os.rename(\"old_name\", \"new_name\")`.",
        code: "import os\n\n# check file exists\nif os.path.exists(\"students.txt\"):\n    print(\"File exists\")\nelse:\n    print(\"File not found\")\n\n# delete file\nif os.path.exists(\"students.txt\"):\n    os.remove(\"students.txt\")\n    print(\"File deleted\")\nelse:\n    print(\"File not found\")\n\n# rename file\nos.rename(\"students.txt\", \"student_details.txt\")\nprint(\"File renamed successfully\")",
      },
      {
        id: 'create-folder',
        title: 'Create a Folder — os.mkdir()',
        content: "We can create a folder using **`os.mkdir()`**.",
        code: "import os\n\nos.mkdir(\"reports\")\n\nprint(\"Folder created successfully\")",
      },
    ],
  },
  {
    pyDay: 8,
    phase: 'Python Foundations',
    title: 'Exception Handling',
    subtitle: 'try, except, else, finally, and debugging in PyCharm',
    topics: ['try/except', 'else & finally', 'Custom exceptions', 'Raising errors', 'Debugging with PyCharm'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=NIWwJbo-9-8', 'Python Exceptions', 'Corey Schafer'),
    sections: [
      {
        id: 'what-is-debugging',
        title: 'What is Debugging?',
        content: "**Debugging** is the process of finding, understanding, and fixing errors in a program.\n\nWhen we write a Python program, it may not always produce the expected result. The program may:\n- Stop suddenly\n- Display an error message\n- Produce an incorrect output\n- Execute the wrong block of code\n- Get stuck in an infinite loop\n\nDebugging helps us understand:\n- which line is executing\n- what values variables contain\n- why a condition is true or false\n- where the error occurred\n- how the program reached that point\n\n**Debugging means executing a program step by step to identify and fix problems.**",
      },
      {
        id: 'why-use-a-debugger',
        title: 'Why Should We Use a Debugger?',
        content: "Using a debugger, we can:\n- pause program execution\n- execute one line at a time\n- inspect variable values\n- enter inside functions\n- skip function execution\n- evaluate expressions\n- identify logical errors\n- understand the program's execution flow\n\nNormally, we execute the program using the **Run** option. To debug it, we use the **Debug** option.",
      },
      {
        id: 'breakpoints-and-pycharm-shortcuts',
        title: 'Breakpoints & PyCharm Debugging Shortcuts',
        content: "A **breakpoint** tells PyCharm: **pause the program before executing this line.**\n\nWhen the debugger stops at a breakpoint, we can control program execution using these shortcuts:\n- **Shift + F9** — Start Debugging\n- **F7** — Step Into (enter inside a function)\n- **F8** — Step Over (move to the next line)\n- **F9** — Resume Program (move to the next breakpoint in the flow)\n- **Shift + F8** — Step Out (complete the function, return to the calling line)\n- **Alt + F9** — Run to Cursor (move the debugger to the line the cursor is on)\n- **Ctrl + F2** — Stop Debugging\n\nWhen a program is in debugging mode, we can also change variable values at runtime — useful for testing special scenarios.",
      },
    ],
  },
  {
    pyDay: 9,
    phase: 'Python Foundations',
    title: 'OOP in Python',
    subtitle: 'Classes, inheritance, polymorphism, encapsulation, and abstraction',
    topics: ['Classes & objects', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=Ej_02ICOIgs', 'Python OOP', 'Corey Schafer'),
    sections: [
      ...PYTHON_OOP_SECTIONS,
      {
        id: 'unit-testing-project-structure',
        title: 'Unit Testing & Project Structure',
        content:
          "Once you can write code, the next step to real-world Python is **testing it** and **structuring the project** so it stays maintainable.\n\n**Why testing matters** — it catches bugs early, prevents regressions, supports refactoring, documents expected behavior, and improves confidence. Tests are your safety net for future changes.\n\n**Unit testing basics** — test small units of code in isolation, use assertions to verify behavior, and follow the **AAA pattern**: **Arrange** (set up data & preconditions), **Act** (execute the code), **Assert** (verify the result). Keep tests fast, reliable, and repeatable.\n\n**pytest** — simple, powerful, and flexible: zero boilerplate for test discovery, rich output and fixtures, parametrization and markers, and a great plugin ecosystem. Run with `pytest -v -ra --cov=your_package`.\n\n**Project folder structure** — `src/your_package/` for source code, `tests/` where all tests live, plus config & metadata files: `pyproject.toml`, `README.md`, `.gitignore`, `.env.example`, and `requirements.txt`.\n\n**Config & environment files** — `.env` (local env vars, not committed), `.env.example` (template for contributors), `pyproject.toml` (project metadata + tool config for black, isort, pytest), `requirements.txt` (dependencies), and `.gitignore`. Use **python-dotenv** to load `.env`, keep secrets out of version control, and pin dependencies for stability.\n\n**Best practices** — write tests before or with code (TDD mindset), keep tests independent and isolated, use descriptive names, aim for high coverage on critical logic, use fixtures & factory functions, mock external services & I/O, and keep tests deterministic. Good tests = living documentation.\n\n**Common mistakes** — writing no tests, tests that depend on each other, slow/flaky tests, testing implementation instead of behavior, ignoring edge cases, skipping CI/CD, and hardcoding config & secrets.\n\n**Trade-offs vs benefits** — the cost is some initial time investment, more upfront planning, and a learning curve; the payoff is a lower bug count, easier refactoring, faster onboarding, confident releases, and long-term time savings. Quality today → stability tomorrow.",
        code: "# tests/test_module.py\nimport pytest\nfrom my_project.module import add\n\ndef test_add_positive():\n    assert add(2, 3) == 5\n\n@pytest.mark.parametrize(\n    \"a,b,expected\",\n    [(0, 0, 0), (-1, 1, 0), (5, -2, 3)],\n)\ndef test_add_various(a, b, expected):\n    assert add(a, b) == expected\n\ndef test_add_type_error():\n    with pytest.raises(TypeError):\n        add(\"a\", 1)",
        image: '/python-notes/python-testing-project-structure.jpg',
        imageAlt: 'Testing and Real-World Project Structure in Python — problem statement, use cases, why testing matters, unit testing basics (AAA pattern), pytest overview, project folder structure, config & environment files, example test code, development workflow diagram, best practices, common mistakes, and trade-offs & maintainability benefits',
      },
    ],
  },
  {
    pyDay: 10,
    phase: 'Python Foundations',
    title: 'Multi-threading in Python',
    subtitle: 'Processes, threads, race conditions, and thread synchronization',
    topics: ['Process vs thread', 'Creating threads', 'start(), join() & is_alive()', 'Race conditions', 'Locks & synchronization'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=IEEhzQoKtQU', 'Python Threading', 'Corey Schafer'),
    sections: [
      {
        id: 'program-process-thread',
        title: 'Program, Process & Thread',
        content: "**A program** is a set of instructions written to perform a particular task — e.g. a calculator program, a banking application, a YouTube application, a file downloader, or a chat application. When we execute a Python program, the operating system creates a **process**.\n\n**A process** is a program that is currently running. When you open Google Chrome, PyCharm, Visual Studio Code, Spotify, Zoom, or Notepad, each application runs as a **separate process**. A process has its own memory, variables, resources, and execution environment.\n\n**A thread** is a small unit of execution inside a program/process. A single process can contain one or more threads. For example, a web browser may use separate threads for loading a web page, playing a video, downloading a file, checking user input, and displaying animations — all of these activities happen inside the **same** browser process.",
      },
      {
        id: 'process-vs-thread',
        title: 'Process vs Thread',
        content: "**Process**\n- A process is a running program.\n- Every process has separate memory.\n- Creating a process is expensive.\n- Communication between processes is slower.\n- One process can contain multiple threads.\n\n**Thread**\n- A thread is a unit of execution inside a process.\n- Threads share the process memory.\n- Creating a thread is lightweight.\n- Communication between threads is faster.\n- A thread always belongs to a process.",
      },
      {
        id: 'what-is-multitasking',
        title: 'What is Multitasking?',
        content: "**Multitasking** means performing multiple tasks during the same period. There are two major types:\n\n**1. Process-based multitasking** — multiple programs run at the same time, e.g. playing music, writing code in PyCharm, and browsing the internet. Each application usually runs as a separate process.\n\n**2. Thread-based multitasking** — multiple tasks run inside the same program. For example, a Python application may download a file, show progress, receive user input, and save information to a database — all at once. These tasks can be handled using different threads.",
      },
      {
        id: 'what-is-multithreading',
        title: 'What is Multithreading?',
        content: "**Multithreading** means executing multiple threads within the same process.\n\nIn Python, multithreading is mainly used when a program has multiple independent tasks — especially tasks that spend time waiting, such as:\n- Downloading multiple files\n- Calling multiple REST APIs\n- Reading multiple files\n- Database operations\n- Sending emails\n- Chat applications\n- Network communications",
      },
      {
        id: 'multithreading-real-life-example',
        title: 'Real-Life Example — The Restaurant Analogy',
        content: "Imagine a restaurant with only **one employee**. The employee must take the customer's order, prepare the food, serve the food, and collect payment — the second customer must wait until all the work for the first customer is completed. This is similar to **single-threaded execution**.\n\nNow imagine the restaurant has **multiple employees**: employee-1 takes orders, employee-2 prepares food, employee-3 serves food, and employee-4 collects payments. Multiple activities happen at the same time, and multiple tables are served during the same period — this is similar to **multithreading**. Each employee represents one thread.",
      },
      {
        id: 'main-thread-and-threading-module',
        title: 'Main Thread & the threading Module',
        content: "Every Python program starts with one default thread called the **main thread**. Python provides the **`threading`** module for multithreading.",
        code: "import threading\n\nprint(\"Current Thread:\", threading.current_thread())\nprint(\"Thread Name:\", threading.current_thread().name)\nprint(\"Thread Identifier:\", threading.current_thread().ident)\nprint(\"Active Thread Count:\", threading.active_count())",
      },
      {
        id: 'creating-threads-in-python',
        title: 'Creating Threads in Python',
        content: "We need to **`import threading`** to work with multithreading. A thread can be created using the **`Thread`** class.\n\nSyntax: `thread = threading.Thread(target=function_name)`\n- `Thread` creates a new thread.\n- `target` specifies the function the thread should execute.\n- the `start()` method starts the new (worker) thread.\n\nAnother way to create a thread is by **subclassing `threading.Thread`** and overriding its `run()` method with your own implementation. When you call `start()`, Python internally calls `run()`.",
        code: "import threading\nimport time\n\ndef task_one():\n    print(\"Task-1 Started\")\n    time.sleep(3)\n    print(\"Task-1 Completed\")\n\ndef task_two():\n    print(\"Task-2 Started\")\n    time.sleep(2)\n    print(\"Task-2 Completed\")\n\nthread1 = threading.Thread(target=task_one)\nthread2 = threading.Thread(target=task_two)\n\nthread1.start()\nthread2.start()\n\n\n########## Another way of creating a thread ##########\n\nclass MyThread(threading.Thread):\n\n    def run(self):\n        print(\"run() method started..\")\n        print(\"Thread Name :\", threading.current_thread().name)\n\nthread3 = MyThread()\nthread3.start()",
      },
      {
        id: 'thread-methods-start-join',
        title: 'Thread Methods — start() & join()',
        content: "**`start()`** begins the execution of a thread — Python internally calls the target function in a separate thread. Don't call `run()` directly when you want separate-thread execution: calling `run()` directly executes the function using the **current** thread, it does not start a new thread.\n\n**`join()`** makes the current thread wait until another thread completes its execution. For example: Thread-1 downloads a file, Thread-2 reads data from the downloaded file — without `join()`, the main thread may continue before the worker thread finishes.",
        code: "def download_file():\n    print(\"Download file started..\")\n    time.sleep(3)\n    print(\"Download completed\")\n\n\nt5 = threading.Thread(target=download_file)\nt5.start()\nt5.join()\n\nprint(\"Read data from downloaded file...\")",
      },
      {
        id: 'thread-is-alive',
        title: 'is_alive() — Checking Thread Status',
        content: "The **`is_alive()`** method checks whether a thread is currently running.",
        code: "def process_data():\n    time.sleep(3)\n\nthread = threading.Thread(target=process_data)\n\nthread.start()\nprint(thread.is_alive())\n\nthread.join()\n\nprint(thread.is_alive())",
      },
      {
        id: 'thread-scheduling',
        title: 'Thread Scheduling',
        content: "When multiple threads are available, the **operating system** decides which thread should execute, how long it should execute, and when execution should switch to another thread — this process is called **thread scheduling**.\n\nBecause scheduling is controlled by the operating system, **thread execution order is not guaranteed**.",
      },
      {
        id: 'what-is-race-condition',
        title: 'What is a Race Condition?',
        content: "A **race condition** occurs when multiple threads try to access and modify shared data at the same time, which may produce an incorrect result.\n\n**Example:** consider a bank account. Two threads try to withdraw money from the same account at the same time. Both threads may read the original balance as 1000, and both may then be allowed to withdraw 700 — creating incorrect account processing. The exact result depends on thread scheduling, which makes race-condition bugs difficult to reproduce.",
        code: "import threading\nimport time\n\nbalance = 1000\n\ndef withdraw(amount):\n    global balance\n    if balance >= amount:\n        current_balance = balance\n        time.sleep(1)\n        balance = current_balance - amount\n        print(\"Withdraw successfully\")\n        print(\"Remaining Balance:\", balance)\n    else:\n        print(\"Insufficient Balance\")\n\nt1 = threading.Thread(target=withdraw, args=(700,))\nt2 = threading.Thread(target=withdraw, args=(700,))\n\nt1.start()\nt2.start()\n\nt1.join()\nt2.join()\n\nprint(\"Final Balance :\", balance)",
      },
      {
        id: 'thread-synchronization-lock',
        title: 'Thread Synchronization — Lock',
        content: "**Thread synchronization** means controlling multiple threads so that only one thread accesses a critical shared resource at a time. Python provides synchronization tools such as **Lock, RLock, Semaphore, Event, and Condition** — for beginners, the most important tool is **Lock**.\n\nA `Lock` allows only one thread at a time to execute a protected section of code:\n- Create it with `lock = threading.Lock()`.\n- Before accessing the shared resource, **acquire** the lock: `lock.acquire()`.\n- After completing the work, **release** the lock: `lock.release()`.",
        code: "import threading\nimport time\n\nbalance = 1000\n\nlock = threading.Lock()\n\ndef withdraw(amount):\n    global balance\n\n    lock.acquire()\n\n    try:\n        if balance >= amount:\n            print(\n                threading.current_thread().name,\n                \"is processing withdrawal\"\n            )\n\n            current_balance = balance\n            time.sleep(1)\n            balance = current_balance - amount\n            print(\"Remaining Balance:\", balance)\n        else:\n            print(\"insufficient balance\")\n    finally:\n        lock.release()\n\nt1 = threading.Thread(target=withdraw, args=(700,), name=\"Customer-1\")\nt2 = threading.Thread(target=withdraw, args=(700,), name=\"Customer-2\")\n\nt1.start()\nt2.start()\n\nt1.join()\nt2.join()\n\nprint(\"Final Balance:\", balance)",
      },
      {
        id: 'lock-with-statement',
        title: 'Lock Using the with Statement (Recommended)',
        content: "The recommended way to use a lock is with the **`with`** statement — Python automatically acquires and releases the lock.\n\nSyntax:\n```\nwith lock:\n    # critical section\n```",
        code: "import threading\nimport time\n\nbalance = 1000\n\nlock = threading.Lock()\n\ndef withdraw(amount):\n    global balance\n\n    with lock:\n        if balance >= amount:\n            print(\n                threading.current_thread().name,\n                \"is processing withdrawal\"\n            )\n            current_balance = balance\n            time.sleep(1)\n            balance = current_balance - amount\n            print(\"Remaining Balance:\", balance)\n        else:\n            print(threading.current_thread().name, \"- Insufficient balance\")\n\n\nt1 = threading.Thread(target=withdraw, args=(700,), name=\"Customer-1\")\nt2 = threading.Thread(target=withdraw, args=(700,), name=\"Customer-2\")\n\nt1.start()\nt2.start()\n\nt1.join()\nt2.join()\n\nprint(\"Final Balance:\", balance)",
      },
    ],
  },
  {
    pyDay: 11,
    phase: 'Python Foundations',
    title: 'Database Connectivity in Python',
    subtitle: 'CRUD operations with SQLite and MySQL',
    topics: ['CRUD operations', 'Relational vs non-relational DBs', 'SQLite with sqlite3', 'MySQL with mysql-connector', 'Parameterized queries'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=EsAIXPIsyQg', 'MySQL DB Server & Workbench Setup', 'Ashok IT'),
    sections: [
      {
        id: 'what-is-database-connectivity',
        title: 'What is Database Connectivity?',
        content: "**Database connectivity** means connecting a Python application to a database to perform operations such as:\n- Insert data\n- Read data\n- Update data\n- Delete data\n\nThese four operations are called **CRUD Operations**:\n- **C** — Create\n- **R** — Read\n- **U** — Update\n- **D** — Delete",
      },
      {
        id: 'types-of-databases',
        title: 'Types of Databases',
        content: "Databases are mainly divided into two types:\n\n**1. Relational databases** — store data in table format.\n- Examples: MySQL, Oracle, PostgreSQL, SQL Server, SQLite.\n\n**2. Non-relational databases** — store data in document, key-value, graph, or other formats.\n- Examples: MongoDB, Redis, Cassandra, Firebase.",
      },
      {
        id: 'what-is-sqlite',
        title: 'What is SQLite?',
        content: "**SQLite** is a lightweight database. It does **not** require:\n1. A DB server installation\n2. A username and password\n3. A port number\n4. Separate configuration\n\nIt stores the complete database inside a **single file**. Python provides built-in support for SQLite using the **`sqlite3`** module.",
      },
      {
        id: 'sqlite-create-table',
        title: 'SQLite — Create a Table',
        content: "Connect to a database file (created automatically if it doesn't exist), then use a **cursor** to execute SQL statements. `connection.commit()` saves the change, and `connection.close()` releases the connection.",
        code: "import sqlite3\n\n# Establishing DB Connection\nconnection = sqlite3.connect(\"students.db\")\n\n# Create cursor object to execute SQL Queries\ncursor = connection.cursor()\n\n# Using cursor we can execute SQL queries\ncursor.execute(\"\"\"\n    create table if not exists students(\n        student_id integer primary key autoincrement,\n        student_name text,\n        student_email text unique,\n        student_course text,\n        student_fee real\n    )\n\"\"\")\n\nprint(\"Student Table Created Successfully....\")\n\nconnection.commit()\nconnection.close()",
      },
      {
        id: 'sqlite-insert-record',
        title: 'SQLite — Insert a Record',
        content: "Use **parameterized queries** (`?` placeholders) instead of string-formatting values directly into SQL — this protects against SQL injection and handles quoting for you.",
        code: "import sqlite3\n\n# Establishing DB Connection\nconnection = sqlite3.connect(\"students.db\")\n\n# Create cursor object to execute SQL Queries\ncursor = connection.cursor()\n\n# Read student information\nstudent_name = input(\"Enter Student Name: \")\nstudent_email = input(\"Enter Student Email: \")\nstudent_course = input(\"Enter Student Course: \")\nstudent_fee = float(input(\"Enter Student Fee: \"))\n\nsql = \"insert into students(student_name, student_email, student_course, student_fee) values(?, ?, ?, ?)\"\n\ncursor.execute(sql, (student_name, student_email, student_course, student_fee))\n\nconnection.commit()\n\nprint(\"Student inserted Successfully\")\nconnection.close()",
      },
      {
        id: 'sqlite-retrieve-records',
        title: 'SQLite — Retrieve Records',
        content: "**`cursor.fetchall()`** returns every matching row as a list of tuples. **`cursor.fetchone()`** returns a single row — useful when querying by a unique key like `student_id`.",
        code: "import sqlite3\n\n# Establishing DB Connection\nconnection = sqlite3.connect(\"students.db\")\n\n# Create cursor object to execute SQL Queries\ncursor = connection.cursor()\n\nsql = \"select * from students\"\n\ncursor.execute(sql)\n\nstudents = cursor.fetchall()\n\nprint(type(students))\n\nfor student in students:\n    print(student)",
      },
      {
        id: 'sqlite-single-record',
        title: 'SQLite — Retrieve a Single Record',
        content: "Query for one record using a `WHERE` clause with a parameterized value, then read it with `fetchone()`.",
        code: "import sqlite3\n\n# Establishing DB Connection\nconnection = sqlite3.connect(\"students.db\")\n\n# Create cursor object to execute SQL Queries\ncursor = connection.cursor()\n\n# Read student information\nstudent_id = int(input(\"Enter Student ID: \"))\n\nsql = \"select * from students where student_id =?\"\n\ncursor.execute(sql, (student_id,))\n\nstudent = cursor.fetchone()\nprint(student)",
      },
      {
        id: 'python-with-mysql-setup',
        title: 'Python with MySQL — Setup',
        content: "Watch the [MySQL DB Server & Workbench Setup](https://www.youtube.com/watch?v=EsAIXPIsyQg) video first if MySQL isn't installed yet.\n\n**Step 1 — install the MySQL connector** inside a virtual environment:\n```\npython -m venv venv\nvenv\\Scripts\\activate\npip install mysql-connector-python\n```\n\nYou can list required libraries in a **`requirements.txt`** file and install them all at once:\n```\npip install -r requirements.txt\n```\n\n**Step 2 — create a Python file** with the methods you'll need: `get_connection()`, `create_table()`, `add_student()`, `view_students()`.",
      },
      {
        id: 'mysql-connection-and-table',
        title: 'MySQL — Connection & Table Creation',
        content: "**`get_connection()`** opens (and safely handles failures for) a connection to the MySQL server. **`create_table()`** creates the `students` table if it doesn't already exist.",
        code: "import mysql.connector\n\ndef get_connection():\n    try:\n        connection = mysql.connector.connect(\n                        host=\"localhost\",\n                        port=\"3306\",\n                        user=\"root\",\n                        passwd=\"root\",\n                        database=\"student\")\n        return connection\n    except mysql.connector.Error as error:\n        print(\"database conn failed:\", error)\n        return None\n\ndef create_table():\n    connection = get_connection()\n    if connection is None:\n        return\n    cursor = None\n    try:\n        cursor = connection.cursor()\n        sql = \"\"\"\n        CREATE TABLE IF NOT EXISTS students (\n                student_id INT PRIMARY KEY AUTO_INCREMENT,\n                student_name VARCHAR(100) NOT NULL,\n                student_email VARCHAR(100) UNIQUE NOT NULL,\n                student_course VARCHAR(100) NOT NULL,\n                student_fee DECIMAL(10, 2) NOT NULL\n            )\n        \"\"\"\n        cursor.execute(sql)\n        connection.commit()\n    except Exception as error:\n        print(\"Error while creating table,\", error)",
      },
      {
        id: 'mysql-insert-and-view',
        title: 'MySQL — Insert & View Students',
        content: "MySQL's connector uses **`%s`** as the placeholder for parameterized queries (SQLite uses `?`). Always `commit()` after a write, and close the connection once you're done.",
        code: "def add_student():\n    connection = get_connection()\n    cursor = connection.cursor()\n\n    student_name = input(\"Enter student name: \").strip()\n    student_email = input(\"Enter student email: \").strip()\n    student_course = input(\"Enter student course: \").strip()\n    student_fee = float(input(\"Enter student fee: \"))\n\n    sql = \"\"\"\n          INSERT INTO students\n              (student_name, student_email, student_course, student_fee)\n          VALUES (%s, %s, %s, %s)\n          \"\"\"\n\n    values = (\n        student_name,\n        student_email,\n        student_course,\n        student_fee\n    )\n\n    cursor.execute(sql, values)\n    connection.commit()\n    print(\"Student Inserted....\")\n    connection.close()\n\ndef view_all_students():\n    connection = get_connection()\n    cursor = connection.cursor()\n\n    sql = \"select * from students\"\n\n    cursor.execute(sql)\n\n    students = cursor.fetchall()\n    for student in students:\n        print(student)\n\n# create_table()\n\nadd_student()\n\nprint(\"-------------------------------\")\n\nview_all_students()",
      },
      {
        id: 'assignment-student-management-system',
        title: 'Assignment — Student Management System',
        content: "Develop a **menu-driven Student Management System** using Python and MySQL. The application should connect to a MySQL database and perform the following CRUD operations:\n1. Add a new student\n2. View all students\n3. View a student by ID\n4. Update student details\n5. Delete a student\n6. Exit the application\n\n**Functional requirements:**\n- Use `mysql-connector-python` to connect Python with MySQL.\n- Create the database table automatically if it does not exist.\n- Use separate functions for each CRUD operation.\n- Use parameterized queries with `%s` placeholders.\n- Display a proper message when a student record is not found.\n- Prevent duplicate email addresses.\n- Handle database connection errors and invalid user input.\n- Ask for confirmation before deleting a student.\n- Close the cursor and database connection after every operation.",
      },
    ],
  },
  {
    pyDay: 12,
    phase: 'Python Foundations',
    title: 'Data Science Introduction',
    subtitle: 'NumPy, Pandas, and the data science workflow',
    topics: ['Data science pipeline', 'NumPy arrays', 'Pandas DataFrames', 'Data cleaning', 'Visualization intro'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=vmEHCJhZ2Jk', 'Python for Data Science', 'freeCodeCamp'),
    sections: PYTHON_DATA_SCIENCE_SECTIONS,
    extraLinks: [
      {
        label: 'Gen AI & Agentic AI with Python — Official Syllabus (PDF)',
        href: '/python-notes/gen-ai-and-agentic-ai-with-python-syllabus.pdf',
        icon: '📄',
      },
    ],
  },
  // ── Phase 2: ML & NLP ──
  {
    pyDay: 13,
    phase: 'ML & NLP',
    title: 'Machine Learning for NLP',
    subtitle: 'Tokenization, preprocessing, vectorization, and embeddings',
    topics: ['Tokenization', 'Stemming & lemmatization', 'Bag of Words & TF-IDF', 'Word2Vec & GloVe', 'NER & POS tagging'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=8d2jGY1w0PE', 'NLP with Python', 'freeCodeCamp'),
  },
  {
    pyDay: 14,
    phase: 'ML & NLP',
    title: 'Deep Learning for NLP',
    subtitle: 'Introduction to deep learning for text',
    topics: ['DL fundamentals', 'Neural networks for text', 'Training pipelines', 'Loss functions', 'GPU basics'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=aircAruvnKk', 'Neural Networks', '3Blue1Brown'),
  },
  {
    pyDay: 15,
    phase: 'ML & NLP',
    title: 'Recurrent Neural Networks',
    subtitle: 'RNN forward/backward propagation and sequence modeling',
    topics: ['RNN architecture', 'Forward propagation', 'Backpropagation through time', 'Vanishing gradients', 'RNN projects'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=WCUNPb-5EYI', 'RNN Explained', 'StatQuest'),
  },
  {
    pyDay: 16,
    phase: 'ML & NLP',
    title: 'Artificial Neural Networks',
    subtitle: 'Neurons, activation functions, backpropagation, and training',
    topics: ['Neurons & activations', 'Sigmoid, ReLU, TanH', 'Forward & backward pass', 'Gradient descent', 'Hyperparameter tuning'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=Ilg3gGewQ5U', 'ANN Intuition', 'StatQuest'),
  },
  // ── Phase 3: Advanced DL Architectures ──
  {
    pyDay: 17,
    phase: 'Advanced DL',
    title: 'LSTM Networks',
    subtitle: 'Long Short-Term Memory gates, training, and GRU variants',
    topics: ['Why LSTM', 'Forget/input/output gates', 'LSTM training', 'GRU intuition', 'End-to-end LSTM project'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=YCzL96nL7Rw', 'LSTM Explained', 'StatQuest'),
  },
  {
    pyDay: 18,
    phase: 'Advanced DL',
    title: 'Bidirectional RNN',
    subtitle: 'Bidirectional sequence modeling advantages and applications',
    topics: ['BiRNN architecture', 'Why bidirectional', 'Advantages & disadvantages', 'Use cases', 'Implementation'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=4PBn55otIcg', 'Bidirectional RNN', 'DeepLearningAI'),
  },
  {
    pyDay: 19,
    phase: 'Advanced DL',
    title: 'Decoders & GPT Architecture',
    subtitle: 'Decoder architecture, masked attention, and GPT training',
    topics: ['Decoder intro', 'GPT architecture', 'Masked multi-head attention', 'GPT training', 'Text generation'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=kCc8FmEb1nY', 'GPT Explained', 'Andrej Karpathy'),
  },
  {
    pyDay: 20,
    phase: 'Advanced DL',
    title: 'Encoders & BERT',
    subtitle: 'Encoder architecture, BERT pre-training and fine-tuning',
    topics: ['Encoder intro', 'BERT configurations', 'Masked LM pre-training', 'BERT fine-tuning', 'RoBERTa & DistilBERT'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=xI0HHm6bjvs', 'BERT Explained', 'CodeEmporium'),
  },
  {
    pyDay: 21,
    phase: 'Advanced DL',
    title: 'Seq2Seq Architecture',
    subtitle: 'Encoder-decoder interaction and sequence-to-sequence models',
    topics: ['Encoder-decoder flow', 'Seq2Seq intuition', 'Teacher forcing', 'Limitations', 'Applications'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=L8HKweZIOmg', 'Seq2Seq Models', 'DeepLearningAI'),
  },
  {
    pyDay: 22,
    phase: 'Advanced DL',
    title: 'Attention Mechanism',
    subtitle: 'Attention architecture and the path to transformers',
    topics: ['Attention intuition', 'Attention scores', 'Seq2Seq with attention', 'Self-attention preview', 'Applications'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=XSSTuhyAmnI', 'Attention Mechanism', 'StatQuest'),
  },
  // ── Phase 4: Gen AI & LLMs ──
  {
    pyDay: 23,
    phase: 'Gen AI & LLMs',
    title: 'Transformers Architecture',
    subtitle: 'Self-attention, multi-head attention, positional encoding, and full encoder-decoder',
    topics: ['Why transformers', 'Self-attention', 'Multi-head attention', 'Positional encoding', 'Full transformer'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=4Bdc55j80LI', 'Transformers Explained', 'StatQuest'),
  },
  {
    pyDay: 24,
    phase: 'Gen AI & LLMs',
    title: 'Introduction to Generative AI',
    subtitle: 'AI vs ML vs DL vs Gen AI and evolution of LLM models',
    topics: ['What is Gen AI', 'AI/ML/DL comparison', 'How ChatGPT is trained', 'LLM evolution', 'Model analysis'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=2IK3DFHRFfw', 'Generative AI Explained', 'IBM Technology'),
  },
  {
    pyDay: 25,
    phase: 'Gen AI & LLMs',
    title: 'Data Preprocessing & Embeddings',
    subtitle: 'Cleaning, embeddings, and the end-to-end Gen AI pipeline',
    topics: ['Data cleaning', 'Text embeddings', 'Embedding models', 'Gen AI pipeline', 'Preprocessing best practices'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=5MaWmzuwx4g', 'Word Embeddings', 'StatQuest'),
  },
  {
    pyDay: 26,
    phase: 'Gen AI & LLMs',
    title: 'Large Language Models',
    subtitle: 'LLM architecture and the "Attention Is All You Need" paper',
    topics: ['LLM architecture', 'Attention paper deep dive', 'How ChatGPT works', 'Token limits', 'Model families'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=7xTGNNLPyMI', 'LLM Explained', 'Andrej Karpathy'),
  },
  {
    pyDay: 27,
    phase: 'Gen AI & LLMs',
    title: 'Vector Databases',
    subtitle: 'Vector indexes, similarity search, and practical vector DB usage',
    topics: ['Vector databases', 'Index vs database', 'Similarity search', 'Pinecone/Chroma intro', 'Hands-on practicum'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=kl6KZE6kQcQ', 'Vector Databases', 'Pinecone'),
    sections: [
      {
        id: 'vector-databases-cheat-sheet',
        title: 'Vector Databases — Complete Cheat Sheet',
        content:
          "1. **What is a vector database?** — it stores data as numerical vectors called **embeddings** and retrieves the most similar vectors using **similarity search**. It is mainly used for semantic search, RAG, recommendation systems, and image search, where results are found by **meaning** rather than exact keyword matching.\n" +
          "2. **What is a vector index?** — a data structure that organizes embeddings so the vector database can find similar vectors quickly without comparing the query with every stored vector. Examples include `Flat`, `IVF`, and `HNSW`. The vector database **stores** vectors; the vector index makes **searching** those vectors faster.\n" +
          "3. **What is a similarity search?** — the process of finding stored vectors that are closest or most similar to a query vector. It compares vectors using metrics such as `cosine similarity`, `Euclidean distance`, or `dot product`. Example: a search for \"How can I recover my account?\" may retrieve \"Steps to reset your password\" because both have similar meaning, even though the words are different.\n" +
          "4. **Examples of vector databases** (most used across the industry): FAISS, Chroma DB, Pinecone, Milvus, Qdrant, PostgreSQL + pgvector, OpenSearch / AWS OpenSearch, Azure AI Search.\n" +
          "5. **Types of vector databases (by deployment):** **In-memory** (FAISS, Chroma DB) — fast access, data in RAM. **Local persistent** (FAISS, Chroma, Qdrant, Milvus) — stored on local disk, you manage it. **Vendor-managed SaaS** (Pinecone, Qdrant, Milvus, Weaviate) — the database vendor manages it. **Cloud-provider managed** (Azure AI Search, AWS OpenSearch, Vertex AI Vector Search, BigQuery Vector Search) — AWS, Azure, or GCP manages it.\n" +
          "6. **Vector similarity search — core types:** **Exact Nearest Neighbor Search** checks the query vector against every stored vector, guaranteeing the true nearest matches — 100% exact, but slower on large datasets, best for small datasets & evaluation (e.g. a `Flat` index). **Approximate Nearest Neighbor Search (ANN)** searches a faster subset (clusters/graph) of the index — approximate with high recall, much faster, best for large-scale production search (e.g. `HNSW`, `IVF`). **Exact search prioritizes accuracy; ANN prioritizes speed and scalability.**\n" +
          "7. **Vector DB — high-level view:** a vector DB's `INDEX` branches into an **exact match** path (`FLAT`) and an **approximate match** path (`IVF` / `HNSW`, built on techniques like clustering, an inverted file index, or a hierarchical navigable small world graph). Only the index-relevant `data` is stored inside the index: the **actual data**, its **corresponding embedding**, and the original **metadata**.\n" +
          "8. **ANN search — how it works:** raw data (e.g. three sentences) is converted into embeddings — numeric vectors like `D1 = [1,2,3,4,5,6,7,8,9]`. Each vector, its metadata, and its source file live together behind the index (`FLAT` / `IVF` / `HNSW`). A query is embedded the same way (`Q`), then compared against the stored vectors via `cosine similarity`, `dot product`, or `Euclidean distance` to find the best possible match. An **exact search** compares the query against every vector; an **ANN search** (`IVF` = clustering, `HNSW` = a navigable graph) narrows the search so it doesn't have to iterate over every row.\n" +
          "9. **End-to-end flow (query → result):** a query like \"ML is future\" is embedded into a vector, ANN search matches it against the stored vectors (actual data + embedded data + metadata) to find the closest match, and that becomes the **context** handed to the LLM.\n" +
          "10. **Key takeaways:**\n" +
          "- Vector DB stores embeddings (vectors).\n" +
          "- Vector index (Flat / IVF / HNSW) makes search fast.\n" +
          "- Similarity search finds closest vectors by meaning.\n" +
          "- Exact search = 100% accurate but slower.\n" +
          "- ANN search = very fast, high recall, scalable.\n" +
          "- Choose DB type based on deployment & scale needs.",
        code:
          "# Toy example: embeddings + cosine similarity\n" +
          'D1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]      # "AI is future"\n' +
          'D2 = [2, 2, 6, 9, 5, 10, 13, 14, 15]  # "Use cases in world"\n' +
          'D3 = [6, 8, 7, 9, 12, 13, 16, 12]     # "System design is imp"\n' +
          'Q  = [5, 6, 7, 8, 9, 10, 60, 55]      # query: "ML is future"\n\n' +
          "from numpy import dot\n" +
          "from numpy.linalg import norm\n\n" +
          "def cosine_similarity(a, b):\n" +
          "    return dot(a, b) / (norm(a) * norm(b))\n\n" +
          "# Exact search: compare Q against every vector (D1, D2, D3, ...)\n" +
          "# ANN search (IVF/HNSW): only compare Q against the nearest cluster/graph node\n" +
          "best_match = max([D1, D2, D3], key=lambda d: cosine_similarity(Q, d))",
        image: '/python-notes/vector-databases-cheat-sheet.jpg',
        imageAlt:
          'Vector Databases cheat sheet — 10 sections: what is a vector database, what is a vector index, what is similarity search, examples of vector databases (FAISS, Chroma DB, Pinecone, Milvus, Qdrant, PostgreSQL+pgvector, OpenSearch, Azure AI Search), types of vector databases by deployment (in-memory, local persistent, vendor-managed SaaS, cloud-provider managed), vector similarity search core types (exact nearest neighbor vs ANN) with a comparison table, a Vector DB high-level view diagram (INDEX branching into FLAT exact match and IVF/HNSW approximate match), a detailed ANN search how-it-works diagram (data to embeddings D1/D2/D3, FLAT/IVF/HNSW index, cosine similarity/dot product/Euclidean distance, best possible match), an end-to-end query-to-result flow diagram, and key takeaways.',
      },
      {
        id: 'vector-databases-90-seconds',
        title: 'Learn Vector Databases in 90 Seconds',
        content:
          "A fast, practical tour across 12 panels:\n" +
          "1. **What is a Vector Database?** — a specialized database designed to store, index, and search high-dimensional vectors efficiently. It enables similarity search to find items that are semantically similar, not just exact matches. **Purpose:** store vectors and find the most similar ones fast!\n" +
          "2. **How it works (high level):** `Data` (text, images, audio, etc.) → an **Embedding Model** converts it to vectors → the **Vector Database** stores & indexes those vectors → a **Query** is converted to a vector the same way → **Results** returns the Top K similar results. Vectors capture meaning — the database finds what's closest in meaning, not just keywords.\n" +
          "3. **Key characteristics:** high-dimensional vector storage, similarity (semantic) search, Approximate Nearest Neighbor (ANN) for speed, scalable to millions/billions of vectors, support for metadata filtering, optimized indexing structures. Designed for AI/ML, RAG, recommendation, semantic search, and more.\n" +
          "4. **Vector representation:** data is converted into numeric vectors (embeddings) of a fixed dimension — e.g. a 1536-dimensional vector like `[0.12, -0.34, 0.56, ..., 0.98]`. Closer vectors mean more similar meaning.\n" +
          "5. **Similarity search:** the goal is to find vectors closest to the query vector, projected here in a 2D vector space to find the Top K results — using distance metrics like `cosine similarity`, `dot product`, or `Euclidean distance`.\n" +
          "6. **Common indexing techniques (ANN):** `HNSW` (Hierarchical Navigable Small World), `IVF` (Inverted File Index), `PQ` (Product Quantization), `ScaNN` / `DiskANN` / `NSG` — these enable fast search with high accuracy using approximate methods. ANN trades a little accuracy for very high recall at speed.\n" +
          "7. **Core components:** **Collection / Index** — a logical grouping of vectors. **Vector** — the high-dimensional numeric representation (embedding). **Metadata / Payload** — additional information associated with the vector. **Index** — the data structure that enables fast similarity search.\n" +
          "8. **Typical workflow:** (1) ingest raw data (text, image, audio, etc.) → (2) generate an embedding using a model (e.g. OpenAI, BGE, Sentence Transformers) → (3) store the embedding + metadata in the vector database → (4) at query time, convert the query to a vector → (5) perform similarity search → (6) return the Top K similar results with metadata.\n" +
          "9. **Popular vector databases:** **Pinecone** (Managed/Cloud) — serverless, scalable, easy to use. **Weaviate** (Open Source) — hybrid search, modules, GraphQL API. **Milvus** (Open Source) — highly scalable, distributed architecture. **Qdrant** (Open Source) — Rust-based, payload filtering, fast & efficient. **Chroma** (Open Source) — simple, lightweight, great for RAG apps. **Redis Vector** (Managed/Module) — real-time, integrated with the Redis ecosystem.\n" +
          "10. **Use cases:** semantic search, RAG (Retrieval-Augmented Generation), recommendation systems, image/video similarity search, fraud detection, anomaly detection, code search, personalization.\n" +
          "11. **Best practices:** choose the right embedding model, normalize vectors (if required), pick the right index for your use case, use metadata filtering to narrow the search, tune recall vs latency, monitor index size and performance, batch upserts and queries for efficiency. **Good embeddings + good index = accurate & fast results.**\n" +
          "12. **Things to consider:** the curse of dimensionality, storage & memory requirements, index build time, the recall-vs-latency trade-off, model quality impacts results, data updates & re-indexing, cost at scale. **Plan early for scale, quality, and performance.**\n\n" +
          "**Key takeaway:** vector databases help machines understand meaning and find what is similar, not just what matches — they are the backbone of modern AI-powered applications and intelligent search. **Store vectors. Search meaning. Build smarter applications.** Vectors represent meaning; vector DBs make it searchable at scale — the future is semantic.",
        code:
          "# Typical workflow, in pseudocode\n" +
          "raw_data = load(\"text | image | audio\")                 # 1. Ingest\n" +
          "embedding = embedding_model.encode(raw_data)             # 2. Generate embedding (OpenAI / BGE / Sentence Transformers)\n" +
          "vector_db.upsert(id=doc_id, vector=embedding, metadata=meta)  # 3. Store embedding + metadata\n\n" +
          "query_vector = embedding_model.encode(query_text)        # 4. Convert query to a vector\n" +
          "results = vector_db.search(query_vector, top_k=5)        # 5. Similarity search (HNSW / IVF / PQ)\n" +
          "# 6. results -> top K similar items, each with its metadata",
        image: '/python-notes/vector-databases-90-seconds.jpg',
        imageAlt:
          'Learn Vector Databases in 90 Seconds — 12 panels: what is a vector database, how it works at a high level (data to embedding model to vector database to query to results), key characteristics, vector representation (1536-dimensional embedding example), similarity search (query vector vs 2D vector space, cosine/dot product/Euclidean distance), common indexing techniques (HNSW, IVF, PQ, ScaNN, DiskANN, NSG), core components (collection/index, vector, metadata/payload, index), typical workflow (6 steps from ingest to top-K results), a popular vector databases comparison table (Pinecone, Weaviate, Milvus, Qdrant, Chroma, Redis Vector with type and highlights), use cases (semantic search, RAG, recommendations, image/video similarity, fraud detection, anomaly detection, code search, personalization), best practices, things to consider, and a key takeaway that vector databases are the backbone of modern AI-powered applications.',
      },
    ],
  },
  // ── Phase 5: OpenAI & LangChain ──
  {
    pyDay: 28,
    phase: 'OpenAI & LangChain',
    title: 'Complete Guide to OpenAI',
    subtitle: 'OpenAI API, chat completions, function calling, Whisper, and DALL-E',
    topics: ['OpenAI API setup', 'Chat completions', 'Function calling', 'Whisper transcription', 'DALL-E image gen'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=c-g6epk3fFE', 'OpenAI API Tutorial', 'freeCodeCamp'),
  },
  {
    pyDay: 29,
    phase: 'OpenAI & LangChain',
    title: 'Introduction to LangChain',
    subtitle: 'LangChain ecosystem, setup, and OpenAI integration',
    topics: ['LangChain overview', 'Virtual environments', 'LangChain + OpenAI', 'First chain', 'Ecosystem map'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=LbT1yp6NWGY', 'LangChain Crash Course', 'freeCodeCamp'),
  },
  {
    pyDay: 30,
    phase: 'OpenAI & LangChain',
    title: 'Open Source LLMs',
    subtitle: 'Llama, Falcon, and using open models with LangChain',
    topics: ['Open source LLMs', 'Llama models', 'Falcon', 'LangChain + OSS', 'Custom chatbot project'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=dqM37myYAMs', 'Llama 3 Tutorial', 'Sam Witteveen'),
  },
  {
    pyDay: 31,
    phase: 'OpenAI & LangChain',
    title: 'LangChain Basic to Advanced',
    subtitle: 'Prompts, chains, agents, tools, memory, and document loaders',
    topics: ['Prompt templates', 'Chains', 'Agents & tools', 'Memory', 'Document loaders'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=aywZrzNaKjs', 'LangChain Agents', 'Sam Witteveen'),
  },
  {
    pyDay: 32,
    phase: 'OpenAI & LangChain',
    title: 'LangChain Components & Modules',
    subtitle: 'Text splitters, embeddings, and Hugging Face integration',
    topics: ['Document loaders', 'Text splitters', 'OpenAI embeddings', 'Ollama & HuggingFace', 'Interview Q&A project'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=tcqEUSNCn8I', 'LangChain RAG', 'Sam Witteveen'),
  },
  // ── Phase 6: RAG & Deployment ──
  {
    pyDay: 33,
    phase: 'RAG & Deployment',
    title: 'Retrieval Augmented Generation',
    subtitle: 'RAG architecture, practical demos, and RAG vs fine-tuning',
    topics: ['RAG introduction', 'RAG pipeline', 'RAG vs fine-tuning', 'Gemini + LangChain Q&A', 'Production RAG'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=T-D1OfcDW1M', 'RAG Explained', 'IBM Technology'),
    sections: [
      {
        id: 'rag-vs-ai-agents',
        title: 'RAG vs AI Agents',
        content:
          "**Retrieval systems answer questions. Agents take actions.** (AIForLeaders.com)\n\n" +
          "**RAG — Retrieval-Augmented Generation, \"The Smart Librarian\":** the flow is `Query → Search → Generate → Answer`. A **user query** hits a **vector database**, which feeds a **document retrieval engine**, which an **LLM response generator** turns into the **final answer** — a **grounded response** with **no autonomous planning**.\n" +
          "- **Best for:** enterprise search, document Q&A, customer support chatbots.\n" +
          "- **Memory:** context window only.\n" +
          "- **Autonomy:** reactive.\n\n" +
          "**AI Agents — \"The Intelligent Operator\", a dynamic autonomous workflow system:** the flow is `Goal → Plan → Use Tool → Evaluate → Repeat`. A **goal** feeds a **reasoning engine**, which works with a **memory module** and **planning module** to drive a **tool usage system** (calling **APIs**, **browser automation**, **task execution**), then **evaluates** the result — looping back to plan again if needed.\n" +
          "- **Best for:** autonomous research, workflow automation, AI copilots, task execution systems.\n" +
          "- **Memory:** persistent memory.\n" +
          "- **Autonomy:** proactive.\n\n" +
          "**Side-by-side comparison:**\n" +
          "- **Primary purpose:** RAG retrieves knowledge; an Agent takes actions.\n" +
          "- **Reasoning:** RAG's is limited; an Agent's is advanced, multi-step.\n" +
          "- **Memory:** RAG has context-window-only memory; an Agent has persistent memory.\n" +
          "- **Tool usage:** RAG usually has none; for an Agent, it's a core capability.\n" +
          "- **Autonomy:** RAG is reactive; an Agent is proactive.\n\n" +
          "**Key takeaway:** they aren't competitors — RAG grounds an answer in retrieved documents, while an agent plans, calls tools, and acts toward a goal. Production systems increasingly combine both: an agent that reasons and acts, using RAG as one of its tools to retrieve grounded knowledge along the way.",
        code:
          "# RAG: Query -> Search -> Generate -> Answer\n" +
          "def rag_answer(query):\n" +
          "    docs = vector_db.search(embed(query))       # retrieve\n" +
          "    return llm.generate(query, context=docs)    # grounded, one-shot answer\n\n" +
          "# AI Agent: Goal -> Plan -> Use Tool -> Evaluate -> Repeat\n" +
          "def agent_run(goal):\n" +
          "    state = {\"goal\": goal, \"memory\": persistent_memory}\n" +
          "    while not done(state):\n" +
          "        plan = reasoning_engine.plan(state)      # multi-step reasoning\n" +
          "        result = tools.call(plan.next_tool)      # APIs, browser, task execution\n" +
          "        state = evaluate(state, result)          # proactive loop\n" +
          "    return state[\"final_result\"]",
        image: '/python-notes/rag-vs-ai-agents.jpg',
        imageAlt:
          'RAG vs AI Agents — Retrieval systems answer questions, agents take actions. RAG ("The Smart Librarian"): Query -> Search -> Generate -> Answer, with User query -> Vector database -> Document retrieval engine -> Final answer, an LLM response generator producing a grounded response with no autonomous planning; best for enterprise search, document Q&A, customer support chatbots; memory is context-window only; autonomy is reactive. AI Agents ("The Intelligent Operator", a dynamic autonomous workflow system): Goal -> Plan -> Use Tool -> Evaluate -> Repeat, with a reasoning engine, memory module, and planning module driving a tool usage system (APIs, browser automation, task execution) that feeds into Evaluate and loops back; best for autonomous research, workflow automation, AI copilots, task execution systems; memory is persistent; autonomy is proactive. A 5-row comparison table (Aspect / RAG / Agent): Primary Purpose (retrieve knowledge / take actions), Reasoning (limited / advanced multi-step), Memory (context window only / persistent memory), Tool Usage (usually no / core capability), Autonomy (reactive / proactive).',
      },
    ],
  },
  {
    pyDay: 34,
    phase: 'RAG & Deployment',
    title: 'Fine-Tuning LLMs',
    subtitle: 'PEFT, LoRA, QLoRA, and fine-tuning Llama on custom data',
    topics: ['What is fine-tuning', 'PEFT methods', 'LoRA & QLoRA', 'Llama 2 custom data', 'When to fine-tune'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=Us5ZFp16PaU', 'LoRA Fine-Tuning', 'Sam Witteveen'),
  },
  {
    pyDay: 35,
    phase: 'RAG & Deployment',
    title: 'LlamaIndex',
    subtitle: 'LlamaIndex framework and financial stock analysis project',
    topics: ['LlamaIndex intro', 'Data connectors', 'Query engines', 'End-to-end demo', 'Stock analysis project'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=cbiiEuXKzo8', 'LlamaIndex Tutorial', 'Sam Witteveen'),
  },
  {
    pyDay: 36,
    phase: 'RAG & Deployment',
    title: 'LLM Apps Deployment',
    subtitle: 'Deploy Gen AI apps with Flask and AWS',
    topics: ['Deployment strategies', 'Flask API for LLMs', 'AWS hosting', 'Environment config', 'Production checklist'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=Z2Qm9itGxQI', 'Deploy ML Models', 'freeCodeCamp'),
  },
  // ── Phase 7: Django ──
  {
    pyDay: 37,
    phase: 'Django',
    title: 'Django Fundamentals',
    subtitle: 'MVT pattern, project setup, URLs, and views',
    topics: ['Django intro', 'Project & app structure', 'URL routing', 'Views & templates', 'Admin site'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=F5mRW0jo-4I', 'Django Tutorial', 'Traversy Media'),
  },
  {
    pyDay: 38,
    phase: 'Django',
    title: 'Django Models & ORM',
    subtitle: 'Models, migrations, queries, and relationships',
    topics: ['Model fields', 'Migrations', 'QuerySet API', 'Foreign keys', 'Admin customization'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=aHC3uTkT9r8', 'Django ORM', 'Corey Schafer'),
  },
  {
    pyDay: 39,
    phase: 'Django',
    title: 'Django Forms & Authentication',
    subtitle: 'Forms, user auth, sessions, and permissions',
    topics: ['Django forms', 'ModelForms', 'User authentication', 'Login & signup', 'Permissions'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=e1IyzVyrFSs', 'Django Auth', 'Corey Schafer'),
  },
  {
    pyDay: 40,
    phase: 'Django',
    title: 'REST API',
    subtitle: 'Web services, REST API fundamentals, JSON, HTTP methods, and FastAPI',
    topics: ['Web services & interoperability', 'REST API & provider/consumer', 'JSON basics', 'DRF setup & serializers', 'ViewSets, routers & auth'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=c708Nf0cHrs', 'Django REST Framework', 'Very Academy'),
    sections: PYTHON_REST_API_SECTIONS,
  },
  // ── Phase 8: FastAPI ──
  {
    pyDay: 41,
    phase: 'FastAPI',
    title: 'FastAPI Fundamentals',
    subtitle: 'Modern async Python APIs with automatic docs',
    topics: ['FastAPI setup', 'Path operations', 'Request bodies', 'Pydantic models', 'Auto OpenAPI docs'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=0sOvCWHmTfU', 'FastAPI Tutorial', 'freeCodeCamp'),
    sections: [
      {
        id: 'why-fastapi',
        title: 'Why FastAPI for Gen AI & Agentic Backends',
        content:
          "**FastAPI** is a modern Python web framework for building APIs. It is a strong fit for Gen AI and agentic systems because:\n\n- **Type hints drive validation** — Pydantic models catch bad JSON before your LLM code runs.\n- **Automatic OpenAPI docs** — `/docs` and `/redoc` stay in sync with your code so frontends and agent tools can discover endpoints.\n- **Async-first** — `async def` routes await model HTTP calls without blocking the whole process.\n- **Dependency injection** — share DB sessions, auth, and settings cleanly with `Depends()`.\n\nCompared with Django, FastAPI is leaner for pure API/microservice work. Django still wins when you need a full admin/CMS-style product UI out of the box.",
      },
      {
        id: 'first-app-uvicorn',
        title: 'First App — FastAPI + Uvicorn',
        content:
          "Install FastAPI and an ASGI server, create a tiny app, and run it with **uvicorn**. The `--reload` flag restarts on file changes during development.\n\nOpen `http://127.0.0.1:8000/docs` to see the interactive Swagger UI generated from your routes.",
        code: '# pip install fastapi uvicorn\n\nfrom fastapi import FastAPI\n\napp = FastAPI(title="Agentic Ask API")\n\n@app.get("/health")\ndef health():\n    return {"ok": True}\n\n# uvicorn main:app --reload',
      },
      {
        id: 'path-operations',
        title: 'Path Operations — GET, POST, Path & Query Params',
        content:
          "A **path operation** is a route handler decorated with `@app.get`, `@app.post`, and so on. Path parameters become function arguments; query parameters are also declared as arguments with defaults or `Query(...)`.\n\nReturn JSON-serializable dicts or Pydantic models. Use `status_code=` on the decorator when you need `201 Created` or similar.",
        code: 'from fastapi import FastAPI, Query\n\napp = FastAPI()\n\n@app.get("/items/{item_id}")\ndef read_item(item_id: int, q: str | None = Query(default=None)):\n    return {"item_id": item_id, "q": q}\n\n@app.post("/items", status_code=201)\ndef create_item(name: str):\n    return {"name": name}',
      },
      {
        id: 'pydantic-request-bodies',
        title: 'Pydantic Models — Request Bodies & Validation',
        content:
          "Declare a **`BaseModel`** for the JSON body. FastAPI parses the body, validates types and constraints, and returns **422** with clear errors when input is invalid — before your handler runs.\n\nThis is the same discipline you want in front of expensive LLM calls: reject bad input early.",
        code: 'from pydantic import BaseModel, Field\nfrom fastapi import FastAPI\n\napp = FastAPI()\n\nclass AskIn(BaseModel):\n    question: str = Field(min_length=1, max_length=2000)\n    top_k: int = Field(default=5, ge=1, le=20)\n\n@app.post("/ask")\ndef ask(body: AskIn):\n    # body.question is validated\n    return {"answer": f"Echo: {body.question}", "top_k": body.top_k}',
      },
      {
        id: 'response-models-docs',
        title: 'Response Models & Auto OpenAPI Docs',
        content:
          "Use **`response_model=`** so the public contract stays stable — extra internal fields are filtered out of the response. Clients (and agents) can trust the schema.\n\nFastAPI builds an OpenAPI document from your types. Browse it at:\n\n- `/docs` — Swagger UI\n- `/redoc` — ReDoc\n\nTreat that schema as the contract between your FastAPI service and every consumer.",
        code: 'from pydantic import BaseModel\nfrom fastapi import FastAPI\n\napp = FastAPI()\n\nclass AskOut(BaseModel):\n    answer: str\n    model: str\n\n@app.post("/ask", response_model=AskOut)\ndef ask(body: AskIn) -> AskOut:\n    return AskOut(answer="...", model="gpt-4.1-mini")',
      },
      {
        id: 'depends-async',
        title: 'Depends() and Async Routes',
        content:
          "**`Depends()`** injects shared logic — config, DB sessions (Day 42), or the current user (Day 43) — into any route without globals.\n\nPrefer **`async def`** when the handler awaits I/O (LLM HTTP clients, DB drivers). FastAPI runs sync `def` routes in a threadpool, but async is the natural fit for agent backends that wait on tools and models.",
        code: 'from fastapi import Depends, FastAPI\n\napp = FastAPI()\n\ndef get_settings():\n    return {"env": "dev"}\n\n@app.get("/config")\ndef read_config(settings=Depends(get_settings)):\n    return settings\n\n@app.post("/ask")\nasync def ask_async(body: AskIn):\n    # await client.chat.completions.create(...)\n    return {"answer": "ok"}',
      },
      {
        id: 'day41-checklist',
        title: 'Day 41 Checklist & What’s Next',
        content:
          "Before moving on, you should be able to:\n\n- Run a FastAPI app with uvicorn and open `/docs`.\n- Declare GET/POST routes with path and query parameters.\n- Validate JSON bodies with Pydantic `BaseModel`.\n- Return a typed `response_model`.\n- Explain why `Depends()` and `async def` matter for LLM APIs.\n\n**What’s next — Day 42:** connect SQLAlchemy, inject `get_db`, and build CRUD endpoints so chats and documents persist.",
      },
    ],
  },
  {
    pyDay: 42,
    phase: 'FastAPI',
    title: 'FastAPI with Databases',
    subtitle: 'SQLAlchemy, async DB, and CRUD APIs',
    topics: ['SQLAlchemy setup', 'Async database', 'CRUD endpoints', 'Dependency injection', 'Error handling'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=5GorMC2lPpk', 'FastAPI + SQLAlchemy', 'Bitfumes'),
    sections: [
      {
        id: "what-why-how",
        title: "What SQLAlchemy Is, Why It Matters, and How It Works",
        content: "**SQLAlchemy** is the most popular Python SQL toolkit and Object-Relational Mapper (**ORM**). It provides a **powerful ORM**, a **Core SQL expression language**, **schema migrations** (via **Alembic**), and works with **many databases**.\n\nWhy use it? Consider these benefits:\n\n- **Write Python code instead of raw SQL** — model your data as classes, not strings.\n- **Database agnostic** — the same code targets **PostgreSQL**, **MySQL**, **SQLite**, and more.\n- **Robust and production-ready**.\n- **Built-in connection pooling**.\n- **Great integration with FastAPI, Flask, Django & more**.\n\nHow it works: the flow is **Python Code** → **SQLAlchemy ORM** → **Database**. You define models (tables) in Python, and SQLAlchemy handles the SQL generation and data mapping between Python objects and rows for you.",
        image: "/python-notes/sqlalchemy-python-backends.jpg",
        imageAlt: "Day 46 Backend Engineering poster: Using SQLAlchemy for Python Backends. Panels cover what SQLAlchemy is (the most popular Python SQL toolkit and ORM offering a powerful ORM, Core SQL expression language, schema migrations via Alembic, and support for many databases), why to use it, how it works (Python code to SQLAlchemy ORM to database), installation, defining a model, creating an engine and Base, creating tables, database configuration for SQLite/PostgreSQL/MySQL, key concepts (Engine, Base, Session, Model, Query), CRUD operations, a One-to-Many relationship example with a User-to-Post ER diagram, session management best practices with a get_db context manager, eager loading via joinedload, Alembic migrations, common pitfalls, useful utilities, when to use SQLAlchemy, helpful resources, a key takeaway, and a Day 47 preview on asynchronous programming.",
      },
      {
        id: "install-and-model",
        title: "Install SQLAlchemy and Define a Model",
        content: "First install the toolkit plus the driver for your database. The **Core + ORM** package is `sqlalchemy`; PostgreSQL needs `psycopg2-binary`, while MySQL needs `pymysql`.\n\nThen **define a model** — a Python class that maps to a database table. It subclasses the declarative `Base`, sets `__tablename__` to name the table, and declares each field as a `Column` with a type such as `Integer` or `String`. Column options carry real meaning: `primary_key=True` marks the identity column, `index=True` speeds lookups, `unique=True` enforces uniqueness, `nullable=False` guarantees a value, and `server_default=func.now()` lets the database stamp `created_at`. The `__repr__` method gives readable debug output when you print a `User` instance.",
        code: "# Core + ORM\npip install sqlalchemy\n\n# For PostgreSQL\npip install psycopg2-binary\n\n# For MySQL\npip install pymysql\n\n# --- Define a Model ---\nfrom sqlalchemy import Column, Integer, String, DateTime, func\nfrom .database import Base\n\nclass User(Base):\n    __tablename__ = \"users\"\n\n    id = Column(Integer, primary_key=True, index=True)\n    name = Column(String(100), nullable=False)\n    email = Column(String(120), unique=True, nullable=False, index=True)\n    created_at = Column(DateTime(timezone=True), server_default=func.now())\n\n    def __repr__(self):\n        return f\"<User id={self.id} name={self.name} email={self.email}>\"",
      },
      {
        id: "engine-base-session-tables",
        title: "Create the Engine, Base and Session, Create Tables, and Configure the Database",
        content: "The **engine** is the entry point to your database. `create_engine` takes the `DATABASE_URL`; `echo=True` logs emitted SQL and `future=True` opts into the 2.0-style API. `sessionmaker` produces a configured `SessionLocal` factory — sessions are your unit of work, with `autocommit=False` and `autoflush=False` giving you explicit control. `declarative_base()` returns the `Base` your models inherit from.\n\nOnce models are defined, `Base.metadata.create_all(bind=engine)` issues the `CREATE TABLE` statements for every mapped class.\n\nThe **DATABASE_URL** selects the backend: **SQLite** uses a file path, **PostgreSQL** uses the `postgresql+psycopg2` driver, and **MySQL** uses `mysql+pymysql`, each carrying user, password, host, port, and database name.",
        code: "# --- Create Engine & Base ---\nfrom sqlalchemy import create_engine\nfrom sqlalchemy.orm import declarative_base, sessionmaker\n\nDATABASE_URL = \"sqlite:///./app.db\"  # Change as needed\nengine = create_engine(DATABASE_URL, echo=True, future=True)\n\nSessionLocal = sessionmaker(bind=engine, autoflush=False,\n                            autocommit=False, future=True)\nBase = declarative_base()\n\n# --- Create Tables ---\nfrom .database import engine\nfrom .models import Base\n\nBase.metadata.create_all(bind=engine)  # Creates tables\n\n# --- Database Configuration (Examples) ---\n# SQLite\nDATABASE_URL = \"sqlite:///./app.db\"\n\n# PostgreSQL\nDATABASE_URL = \"postgresql+psycopg2://user:pass@localhost:5432/mydb\"\n\n# MySQL\nDATABASE_URL = \"mysql+pymysql://user:pass@localhost:3306/mydb\"",
      },
      {
        id: "key-concepts-crud",
        title: "Key Concepts and CRUD Operations",
        content: "Five terms anchor everything in SQLAlchemy:\n\n- **Engine**: Handles DB connections.\n- **Base**: Base class for all models.\n- **Session**: Interface for DB operations.\n- **Model**: Python class mapped to a table.\n- **Query**: Build and execute database queries.\n\nWith these in place, **CRUD** (Create, Read, Update, Delete) is just working with the session. `create_user` adds an object, commits, and refreshes it to load the DB-generated `id` and `created_at`. Reads use `db.query(User)` with `.filter(...).first()` for one row or `.all()` for many. Updates mutate the fetched object then commit. Deletes fetch the object and call `db.delete(user)`. Every function opens a `SessionLocal()` and closes it when done to avoid leaking connections.",
        code: "# Create\nfrom .database import SessionLocal\nfrom .models import Base\n\ndef create_user(name: str, email: str):\n    db = SessionLocal()\n    user = User(name=name, email=email)\n    db.add(user)\n    db.commit()\n    db.refresh(user)  # load id, created_at\n    db.close()\n    return user\n\n# Read One\ndef get_user(user_id: int):\n    db = SessionLocal()\n    user = db.query(User).filter(User.id == user_id).first()\n    db.close()\n    return user\n\n# Read All\ndef get_users():\n    db = SessionLocal()\n    users = db.query(User).all()\n    db.close()\n    return users\n\n# Update\ndef update_user(user_id: int, new_name: str):\n    db = SessionLocal()\n    user = db.query(User).filter(User.id == user_id).first()\n    if user:\n        user.name = new_name\n        db.commit()\n    db.close()\n    return user\n\n# Delete\ndef delete_user(user_id: int):\n    db = SessionLocal()\n    user = db.query(User).filter(User.id == user_id).first()\n    if user:\n        db.delete(user)\n        db.commit()\n    db.close()",
      },
      {
        id: "relationships",
        title: "Relationships: One-to-Many with ForeignKey and back_populates",
        content: "Real schemas connect tables. A **One-to-Many** relationship — one `User` has many `Post` rows — is expressed with a **ForeignKey** and the `relationship` construct. On `Post`, `user_id = Column(Integer, ForeignKey(\"users.id\"))` stores the owning user's key, and `user = relationship(\"User\", back_populates=\"posts\")` gives each post a `.user` attribute. On `User`, `posts = relationship(\"Post\", back_populates=\"user\")` gives each user a `.posts` list. **back_populates** keeps both sides in sync so updating one automatically reflects on the other.\n\nThe ER diagram captures this: **User** (id PK, name, email) relates **1 — N** to **Post** (id PK, title, content, user_id FK). The `user_id` foreign key on the many-side is what links each post back to exactly one user.",
        code: "# One-to-Many: User -> Posts\nfrom sqlalchemy import ForeignKey\nfrom sqlalchemy.orm import relationship\n\nclass Post(Base):\n    __tablename__ = \"posts\"\n\n    id = Column(Integer, primary_key=True)\n    title = Column(String(200), nullable=False)\n    content = Column(String)\n    user_id = Column(Integer, ForeignKey(\"users.id\"))\n\n    user = relationship(\"User\", back_populates=\"posts\")\n\nclass User(Base):\n    __tablename__ = \"users\"\n\n    id = Column(Integer, primary_key=True)\n    name = Column(String(100), nullable=False)\n    email = Column(String(120), unique=True)\n    posts = relationship(\"Post\", back_populates=\"user\")",
      },
      {
        id: "sessions-eager-loading",
        title: "Session Management Best Practices and Eager Loading",
        content: "Sessions are cheap but must be handled with discipline. Follow these practices:\n\n- **Create session per request / operation** — don't share one session across the whole app.\n- **Always close session** to return the connection to the pool.\n- **Use context managers** so cleanup happens even on errors.\n- **Handle exceptions and rollback** to keep the database consistent.\n\nThe `get_db` **contextmanager** pattern (shown below) yields a session, commits on success, rolls back on exception, and always closes in the `finally` block.\n\n**Advanced: Eager Loading.** By default related rows load lazily, one query at a time — the N+1 problem. `joinedload` fetches a user and their posts in a single query, so `db.query(User).options(joinedload(User.posts)).all()` is far more efficient when you know you'll need the relationship.",
        code: "from contextlib import contextmanager\n\n@contextmanager\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n        db.commit()\n    except Exception:\n        db.rollback()\n        raise\n    finally:\n        db.close()\n\n# --- Advanced: Eager Loading ---\nfrom sqlalchemy.orm import joinedload\n\ndef get_users_with_posts():\n    db = SessionLocal()\n    users = db.query(User).options(joinedload(User.posts)).all()\n    db.close()\n    return users",
      },
      {
        id: "migrations-pitfalls",
        title: "Migrations with Alembic and Common Pitfalls",
        content: "As your models evolve, **Alembic** works with SQLAlchemy to handle **schema migrations** — versioned, incremental changes to your database structure. You initialize a migrations folder, autogenerate a revision by diffing your models against the current schema, then apply it. Autogeneration inspects your models and writes the `upgrade`/`downgrade` steps for you, and `upgrade head` runs the latest.\n\nWatch out for these **common pitfalls**:\n\n- **Forgetting to commit changes** — writes silently vanish.\n- **Using global sessions** — leads to threading and stale-state bugs.\n- **N+1 query problem** (use eager loading such as `joinedload`).\n- **Not closing sessions** (connection leaks).\n- **Ignoring exceptions and rollbacks**, leaving the DB inconsistent.",
        code: "alembic init alembic\nalembic revision --autogenerate -m \"create users table\"\nalembic upgrade head",
      },
      {
        id: "utilities-when-resources",
        title: "Useful Utilities, When to Use SQLAlchemy, and Resources",
        content: "Handy **utilities** worth remembering:\n\n- `func.now()` — server timestamp.\n- `Column(default=...)` — default values.\n- **Unique & Index** — for performance.\n- `nullable=False` — data integrity.\n- `server_default` — DB-level defaults.\n\n**When to use SQLAlchemy:**\n\n- **Complex queries and joins**.\n- **Multiple database support**.\n- **When working with FastAPI / Flask / Django**.\n- **Need migrations and schema versioning**.\n\n**Helpful resources:**\n\n- Docs: `https://docs.sqlalchemy.org/en/20/`\n- Tutorial: `https://docs.sqlalchemy.org/en/20/orm/tutorial.html`\n- Cheat Sheet: `https://quickref.me/sqlalchemy`\n\n**Key takeaway:** SQLAlchemy makes database interactions in Python clean, safe, and powerful — master the Core concepts and let the ORM handle the heavy lifting. **What's next:** Day 47 covers Asynchronous Programming in Python (`asyncio`, `aiohttp`, databases).",
      },
      {
        id: "why-migrations-and-seed-data",
        title: "Why Migrations & Seed Data Matter — What They Are",
        content: "As soon as more than one person works on an app, editing the database schema by hand becomes dangerous. **Database migrations** solve this by making every schema change **version-controlled**, reproducible, and **reversible** — the same way Git tracks code.\n\nWhy they matter:\n\n- Track changes to your database schema in a consistent way.\n- Share schema changes with your team and deploy safely.\n- Seed data helps you populate the database with initial or test data.\n- Essential for collaboration and automation.\n\n**What are they?**\n\n- **Migrations**: version-controlled changes to your database schema (new tables, columns, indexes, constraints).\n- **Seed Data**: predefined data inserted into tables for development, testing, or initial setup (default roles, settings, demo accounts).\n\n**How it works:** a **Migration File** describes a change. You **Migrate Up** to apply it, the **Database is Updated**, and you can **Rollback Down** to revert if needed. In short: write migration, apply to database, roll back if needed; run seeds to insert initial data.",
        image: "/python-notes/fastapi-database-migrations-seed.jpg",
        imageAlt: "Day 47 Backend Engineering infographic on Database Migrations and Seed Data: why they matter, what they are (migrations = version-controlled schema changes, seed data = predefined data for dev/test/initial setup), how it works (Migration File to Migrate Up to Database Updated to Rollback Down), key concepts (migration file, up, down, seeder, versioning, environment), popular tools (Alembic/SQLAlchemy, Prisma, TypeORM, Sequelize, Laravel), the 5-step Alembic migrations flow, initial setup, generating and running migrations, the auto-generated upgrade/downgrade file, rollback commands, the alembic_version migrations table, Sequelize and PostgreSQL seeders, best practices, dev/staging/prod environments, common pitfalls, and a migration and seed checklist.",
      },
      {
        id: "key-concepts-flow-tools",
        title: "Key Concepts, the Migrations Flow & Popular Tools",
        content: "The vocabulary of migrations is small but load-bearing. Each concept maps to a piece of the workflow.\n\n**Key Concepts:**\n\n- **Migration File**: code that defines schema changes.\n- **Up**: applies the changes.\n- **Down**: reverts the changes.\n- **Seeder**: inserts initial data.\n- **Versioning**: keeps track of which migrations have run.\n- **Environment**: use different DBs for dev/test/prod.\n\n**Migrations Flow (Alembic, Python) — 5 steps:**\n\n- **1 Create**: generate a new migration file.\n- **2 Write Changes**: define schema changes in `upgrade()` and `downgrade()`.\n- **3 Apply Migration**: apply changes to the database.\n- **4 Migrations Table**: Alembic tracks which migrations have run.\n- **5 Rollback (if needed)**: revert changes using `downgrade()`.\n\n**Popular Tools:**\n\n- **Alembic (SQLAlchemy)** — Python.\n- **Prisma (Prisma ORM)**.\n- **TypeORM** — Node.js.\n- **Sequelize** — Node.js.\n- **Laravel** — PHP.",
      },
      {
        id: "alembic-setup-generate",
        title: "Alembic — Initial Setup & Generating a Migration",
        content: "Because this is the FastAPI/Python track, **Alembic** (the migration tool that ships alongside **SQLAlchemy**) is your primary tool.\n\n**1 Initial Setup:** install Alembic, run `alembic init` to scaffold the migrations folder and config, then edit `alembic.ini` to point at your database with the correct **DB URL**.\n\n**2 Generate a Migration:** rather than writing schema code by hand, `--autogenerate` inspects the difference between your SQLAlchemy models and the current database, then writes a migration file for you. Always pass a clear `-m` message so the revision is self-documenting. Review the generated file before applying it — autogenerate is a strong first draft, not a guarantee, and it can miss things like renames or certain constraints.",
        code: "# Install\npip install alembic\n\n# Initialize\nalembic init alembic\n# Update alembic.ini with your DB URL\n\n# Generate a migration\n# Custom: creating a users table\n# autogenerate based on models\nalembic revision --autogenerate -m \"create users table\"",
      },
      {
        id: "migration-file-upgrade-downgrade",
        title: "The Auto-Generated Migration File (upgrade / downgrade)",
        content: "Every Alembic migration file exposes two functions. **`upgrade()`** applies the change (the **Up** direction) and **`downgrade()`** reverts it (the **Down** direction). Keeping both in sync is what makes a migration reversible — never leave `downgrade()` empty, or you lose the ability to roll back cleanly.\n\nIn this auto-generated example, `upgrade()` calls `op.create_table` to build a `users` table with an integer primary-key `id`, a required `name`, a unique required `email`, and a `created_at` timestamp defaulting to the database's `now()`. The matching `downgrade()` simply drops the table with `op.drop_table('users')`, undoing exactly what `upgrade()` did.",
        code: "def upgrade():\n    op.create_table(\n        'users',\n        sa.Column('id', sa.Integer, primary_key=True),\n        sa.Column('name', sa.String(100), nullable=False),\n        sa.Column('email', sa.String(120), unique=True, nullable=False),\n        sa.Column('created_at', sa.DateTime, server_default=sa.func.now())\n    )\n\ndef downgrade():\n    op.drop_table('users')",
      },
      {
        id: "run-rollback-migrations-table",
        title: "Running & Rolling Back Migrations + the Migrations Table",
        content: "Once a migration file exists, you apply and reverse it from the CLI.\n\n**4 Run Migrations:** `alembic upgrade head` applies all pending migrations up to the latest; you can also upgrade to a specific revision, and `alembic current` shows where the database stands.\n\n**5 Rollback Migrations:** `alembic downgrade -1` steps back one migration, you can downgrade to a specific revision, and `alembic downgrade base` reverses everything.\n\n**Migrations Table (Example):** Alembic records applied revisions so it knows what has already run.\n\n- **version_num** `1682345678901_1a2b3c4d5e6f` — **timestamp** `2024-05-01 10:00:00`\n- **version_num** `1682345789123_2b3c4d5e6f7a` — **timestamp** `2024-05-01 10:05:00`\n- **version_num** `1682345891234_3c4d5e6f7a8b` — **timestamp** `2024-05-01 10:10:00`\n\nAlembic keeps track of applied migrations in the `alembic_version` table.",
        code: "# Apply all pending migrations\nalembic upgrade head\n\n# Apply to a specific revision\nalembic upgrade <revision_id>\n\n# Check current revision\nalembic current\n\n# Rollback one step\nalembic downgrade -1\n\n# Rollback to a specific revision\nalembic downgrade <revision_id>\n\n# Rollback all\nalembic downgrade base",
      },
      {
        id: "seed-data-seeders",
        title: "Seed Data — What It Is, Seeders & Running Them",
        content: "**What is Seed Data?** Seed data is initial data inserted into tables, useful for:\n\n- Development & testing.\n- Demo accounts.\n- Lookup/reference data (roles, permissions, etc.).\n\nSeeders are separate from schema migrations: migrations shape the tables, seeders fill them. In the Node.js **Sequelize** example, the seeder's `up` uses `queryInterface.bulkInsert('users', [...])` to add rows and its `down` uses `queryInterface.bulkDelete('users', null, {})` to remove them — the same up/down, reversible pattern as migrations. You run Sequelize seeders with the CLI (`db:seed:all`, `db:seed:undo`, `db:seed:undo:all`).\n\nFor pure SQL setups (or simple reference data in Postgres), a plain `INSERT` script does the job — for example inserting default `roles` and `settings` rows.",
        code: "// seeders/20240501000000-demo-users.js\n'use strict';\n\nmodule.exports = {\n  up: async (queryInterface, Sequelize) => {\n    await queryInterface.bulkInsert('users', [\n      { name: 'Admin User', email: 'admin@example.com', role: 'admin', createdAt: new Date(), updatedAt: new Date() },\n      { name: 'John Doe', email: 'john@example.com', role: 'user', createdAt: new Date(), updatedAt: new Date() },\n    ], {});\n  },\n  down: async (queryInterface, Sequelize) => {\n    await queryInterface.bulkDelete('users', null, {});\n  },\n};\n\n# Run Seeders (Sequelize CLI)\n# With Sequelize CLI\nnpx sequelize-cli db:seed:all\n\n# Undo last seed\nnpx sequelize-cli db:seed:undo\n\n# Undo all seeds\nnpx sequelize-cli db:seed:undo:all\n\n-- Example SQL Seed (PostgreSQL)\nINSERT INTO roles (id, name, description)\nVALUES\n  (1, 'admin', 'Administrator with all permissions'),\n  (2, 'user', 'Regular user'),\n  (3, 'moderator', 'Can moderate content');\n\nINSERT INTO settings (key, value)\nVALUES\n  ('app_name', 'My Awesome App'),\n  ('items_per_page', '20');",
      },
      {
        id: "best-practices-environments-pitfalls",
        title: "Best Practices, Environments (Dev/Staging/Prod) & Common Pitfalls",
        content: "Migrations are powerful and destructive in equal measure, so discipline matters.\n\n**Best Practices:**\n\n- Always commit migration and seed files to version control.\n- Write small, focused migrations.\n- Test migrations on a local/staging database first.\n- Avoid editing migrations after they're applied in production.\n- Use transactions (when supported) for safety.\n- Keep seed data idempotent (safe to run multiple times).\n\n**Different Environments:**\n\n- **Dev**: frequent changes, lots of resets & seeds.\n- **Staging**: mirror production, apply migrations carefully.\n- **Prod**: migrations must be backward compatible & tested.\n- Never run seeds that create duplicate or conflicting data in production.\n\n**Common Pitfalls:**\n\n- Manually changing the database outside migrations.\n- Forgetting to commit migration files.\n- Deleting or modifying old migrations.\n- Writing destructive migrations without `down()` logic.\n- Seeding data that already exists (duplicates).\n- Running migrations in the wrong environment.",
      },
      {
        id: "migration-seed-checklist",
        title: "Migration & Seed Checklist — What's Next",
        content: "Use this checklist before shipping any schema or data change:\n\n- Create a migration for every schema change.\n- Test `upgrade` & `downgrade` locally.\n- Apply migrations in staging before production.\n- Add seeders for reference/demo data.\n- Document any manual steps (e.g. indexes, triggers).\n- Monitor migration logs during deployment.\n\nMastering migrations and seed data means your schema evolves safely across every environment, your team stays in sync, and deployments become repeatable rather than risky.\n\n**What's Next — Day 48: Caching Strategies (Redis, In-Memory, CDN).** With your data layer versioned and seeded, the next step is making reads fast. Great job completing Day 47 — keep building, keep learning, keep shipping.",
      },
    ],
  },
  {
    pyDay: 43,
    phase: 'FastAPI',
    title: 'FastAPI Authentication & Security',
    subtitle: 'JWT auth, OAuth2, and securing AI API endpoints',
    topics: ['OAuth2 password flow', 'JWT tokens', 'Protected routes', 'API key auth', 'CORS & middleware'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=5GxQ1rLTwaU', 'FastAPI Auth', 'Bitfumes'),
    image: "/python-notes/fastapi-rate-limiting.jpg",
    imageAlt: "Day 48 Backend Engineering infographic titled 'Securing APIs with Rate Limiting and Request Throttling' by @e_opore. It covers why rate limiting matters, key concepts (rate limiting, throttling, quota, window), a How It Works flow from Client to API Gateway/Middleware to Backend with a Rate Limiter that checks limits and allows, blocks or delays, five common algorithms (Fixed Window Counter, Sliding Window Log, Sliding Window Counter, Token Bucket, Leaky Bucket), typical rate limit headers (X-RateLimit-Limit/Remaining/Reset, Retry-After), example 429 response headers and JSON, best practices, three code panels implementing rate limiting in Node.js with express-rate-limit, Python FastAPI with slowapi, and Redis sliding window counter with ioredis, where to store counters (In-Memory, Redis, Memcached, Database), a table of example limits by endpoint, an example 429 response, common pitfalls, monitoring and alerts, a security checklist, a key takeaway, and a preview of Day 49 on API security with authentication, authorization, JWT and OAuth 2.0.",
    sections: [
      {
        id: "why-it-matters",
        title: "Why Rate Limiting Matters",
        content: "**Rate limiting** and **request throttling** are essential defenses that control how many requests a client can make to your API in a given time period. Without them, a single abusive or misbehaving client can overwhelm your backend, degrade service for everyone, or run up your costs.\n\nWhy it matters:\n\n- **Prevents API abuse and brute force attacks** by capping how fast an attacker can hammer login or sensitive endpoints.\n- **Protects your backend from excessive load** so a traffic spike from one source cannot starve resources.\n- **Ensures fair usage for all clients** by giving each a bounded share of capacity.\n- **Mitigates DDoS and scraping attempts** by blocking floods of automated requests.\n- **Improves system stability and reliability**, keeping latency predictable under pressure.",
      },
      {
        id: "key-concepts",
        title: "Key Concepts: Rate Limiting, Throttling, Quota, Window",
        content: "Four terms form the vocabulary of this topic. Understanding the distinctions makes the algorithms and headers that follow much clearer.\n\n- **Rate Limiting**: restricting the number of requests a client can make in a given time window. When the cap is hit, further requests are rejected (typically with HTTP `429 Too Many Requests`).\n- **Throttling**: dynamically slowing down or rejecting requests when limits are exceeded. Rather than a hard block, throttling can delay or shape traffic so the client is paced instead of cut off.\n- **Quota**: the maximum number of requests allowed. This is the ceiling value that the limiter enforces.\n- **Window**: the time period the quota applies to, for example `1 minute` or `1 hour`. The quota resets at the end of each window (or slides continuously, depending on the algorithm).",
      },
      {
        id: "how-it-works",
        title: "How It Works: The Request Flow",
        content: "Rate limiting sits between the client and your backend, usually in an **API Gateway** or **middleware** layer. The flow is:\n\n**Client → API Gateway / Middleware → Backend Service**\n\nInside the gateway/middleware, a **Rate Limiter** intercepts each incoming request and **checks the limit** for that client (identified by IP, API key, or user ID). Based on the current count in the active window, it takes one of three actions:\n\n- **Allow**: the request is under the limit and passes through to the backend.\n- **Block**: the limit is exceeded, so the request is rejected immediately, usually with a `429` response.\n- **Delay**: the request is throttled and paced, slowed rather than dropped.\n\nPlacing the limiter at the edge means abusive traffic is stopped before it ever reaches and taxes your backend service.",
      },
      {
        id: "common-algorithms",
        title: "Common Rate Limiting Algorithms",
        content: "Five algorithms are commonly used, each trading accuracy against memory and complexity:\n\n- **Fixed Window Counter**: counts requests in fixed time windows (for example, per calendar minute). Simple and cheap, but it can allow bursts at the window boundary, since a client can spend its full quota at the end of one window and again at the start of the next.\n- **Sliding Window Log**: stores a timestamp for every request in a rolling window and counts only those within the last interval. More accurate and burst-proof, but memory intensive because it keeps every timestamp.\n- **Sliding Window Counter**: combines fixed windows with weighting to smooth out bursts, approximating the sliding log using far less memory. A good balance of accuracy and performance, and a popular production choice.\n- **Token Bucket**: tokens are added to a bucket at a steady rate, and each request consumes a token. It allows bursts up to the bucket size while enforcing a long-term average rate.\n- **Leaky Bucket**: requests are processed at a fixed rate; excess requests are queued or dropped. It smooths traffic into a constant outflow, ideal when you need a steady, predictable processing rate.",
      },
      {
        id: "rate-limit-headers",
        title: "Typical Rate Limit Headers & Example 429 Response",
        content: "Well-behaved APIs communicate limit state back to clients through response headers so callers can self-regulate instead of blindly retrying.\n\n- **`X-RateLimit-Limit`**: the maximum number of requests allowed in the window.\n- **`X-RateLimit-Remaining`**: how many requests the client has left in the current window.\n- **`X-RateLimit-Reset`**: the time (typically a Unix timestamp) when the limit resets.\n- **`Retry-After`**: the number of seconds the client should wait before retrying, sent on a `429` response.\n\nThe **Example Response Headers** panel shows a full `429 Too Many Requests` reply: a JSON body with an `error` and `message`, plus the headers above (`Remaining` at `0`, a `Reset` timestamp, and `Retry-After: 60`). Returning these makes your API predictable and client-friendly.",
        code: "HTTP/1.1 429 Too Many Requests\nContent-Type: application/json\nX-RateLimit-Limit: 100\nX-RateLimit-Remaining: 0\nX-RateLimit-Reset: 1716204000\nRetry-After: 60\n\n{\n    \"error\": \"Too Many Requests\",\n    \"message\": \"Rate limit exceeded. Try again later.\"\n}",
      },
      {
        id: "fastapi-slowapi",
        title: "Implementing Rate Limiting in Python (FastAPI with slowapi)",
        content: "For a **FastAPI** backend, the go-to library is **slowapi**, a rate limiting extension inspired by Flask-Limiter. Install it with `pip install slowapi`.\n\nThe pattern is:\n\n- Create a `Limiter` and pass a **key function** (`get_remote_address`) so limits are tracked per client IP. You could swap this for a function that keys on API key or user ID.\n- Attach the limiter to the app via `app.state.limiter`, and register an **exception handler** for `RateLimitExceeded` that returns a clean `429` JSON response.\n- Decorate individual routes with `@limiter.limit(\"100/minute\")` to enforce per-endpoint limits. Note the route handler must accept the `request: Request` parameter, which slowapi uses to identify the caller.\n\nThis gives you declarative, per-route limits with almost no boilerplate, which is why it fits FastAPI's dependency-driven style so well.",
        code: "# Install: pip install slowapi\nfrom fastapi import FastAPI, Request\nfrom slowapi import Limiter\nfrom slowapi.util import get_remote_address\nfrom slowapi.errors import RateLimitExceeded\n\napp = FastAPI()\n\nlimiter = Limiter(key_func=get_remote_address)\napp.state.limiter = limiter\napp.add_exception_handler(RateLimitExceeded,\n    lambda r, e: JSONResponse(\n        status_code=429,\n        content={\"error\": \"Too Many Requests\",\n            \"detail\": str(e.detail)}))\n\n@app.get(\"/api/items\")\n@limiter.limit(\"100/minute\")\nasync def read_items(request: Request):\n    return {\"items\": [1, 2, 3]}",
      },
      {
        id: "nodejs-and-redis-examples",
        title: "Node.js (express-rate-limit) and Redis Sliding Window Examples",
        content: "The poster also shows the equivalent patterns in the Node.js ecosystem, useful for polyglot teams.\n\n**1. Node.js with express-rate-limit** (`npm i express-rate-limit`): configure a `windowMs` (15 minutes) and a `max` of 100 requests per IP per window, a custom `message`, and enable `standardHeaders` to return `RateLimit-*` info while disabling the legacy `X-RateLimit-*` headers. Apply it as middleware to `/api/` routes.\n\n**3. Using Redis (Sliding Window Counter)** with **ioredis**: because in-memory counters do not work across multiple app instances, Redis provides a shared, atomic store. The function uses a Redis **sorted set** per key: `zremrangebyscore` drops entries older than the window start, `zcard` counts what remains, `zadd` records the current request with its timestamp, and `expire` sets a TTL. A pipeline runs these atomically, and the request is allowed if the resulting count is within the limit. This is the production-grade approach for distributed deployments.",
        code: "// 1. Node.js with express-rate-limit\n// Install\n// npm i express-rate-limit\nconst rateLimit = require('express-rate-limit');\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100, // limit each IP to 100 requests per windowMs\n  message: {\n    error: 'Too Many Requests',\n    message: 'Rate limit exceeded. Please try again later.'\n  },\n  standardHeaders: true, // Return rate limit info in headers\n  legacyHeaders: false, // Disable the X-RateLimit-* legacy headers\n});\n\napp.use('/api/', limiter); // Apply to /api/* routes\n\napp.get(\"/api/data\", (req, res) => {\n  res.json({ data: \"Here is your data\" });\n});\n\n\n// 3. Using Redis (Sliding Window Counter) - Node.js (ioredis)\nconst Redis = require('ioredis');\nconst redis = new Redis();\n\nasync function isAllowed(key, limit, windowMs) {\n  const now = Date.now();\n  const windowStart = now - windowMs;\n\n  const pipeline = redis.pipeline();\n  pipeline.zremrangebyscore(key, 0, windowStart);\n  pipeline.zcard(key);\n  pipeline.zadd(key, now, now.toString());\n  pipeline.expire(key, Math.ceil(windowMs / 1000));\n\n  const results = await pipeline.exec();\n  const count = results[1][1]; // zcard result\n  return count <= limit;\n}\n// Usage: allow if isAllowed(ip, 100, 60 * 1000)",
      },
      {
        id: "storage-and-limits",
        title: "Where to Store Counters & Example Limits by Endpoint",
        content: "Rate limiting needs somewhere to keep the request counts. The right backing store depends on whether you run a single instance or many.\n\n- **In-Memory (Node Cache)**: fast, but not suitable for multi-instance apps because each instance keeps its own counts.\n- **Redis (Recommended)**: fast, supports atomic operations and TTL, and is shared across instances, making it the default choice for distributed systems.\n- **Memcached**: a simple and fast key-value store.\n- **Database**: not recommended for high-frequency checks because per-request reads and writes add too much latency.\n\nLimits should vary by endpoint sensitivity and user type. The **Example Limits by Endpoint** table (Endpoint / User Type / Limit / Window):\n\n- `/api/login` — Anonymous — 5 requests — 15 minutes\n- `/api/register` — Anonymous — 3 requests — 1 hour\n- `/api/data` — Authenticated — 100 requests — 1 minute\n- `/api/export` — Authenticated — 10 requests — 1 minute\n- `/api/admin/*` — Admin — 300 requests — 1 minute\n\nNotice how auth-sensitive endpoints like login and register get tight limits, while trusted authenticated and admin traffic is allowed far more headroom.",
      },
      {
        id: "best-practices-pitfalls-checklist",
        title: "Best Practices, Common Pitfalls, Monitoring & Security Checklist",
        content: "**Best Practices**:\n\n- Set sensible limits based on endpoint sensitivity.\n- Use different limits for authenticated versus anonymous users.\n- Return meaningful `429` responses with headers.\n- Whitelist internal services or trusted IPs.\n- Monitor and alert on excessive rate limit hits.\n- Store counters in a fast store (Redis/Memcached).\n- Combine with other security layers (Auth, WAF).\n\n**Common Pitfalls**:\n\n- Using an in-memory store in multi-instance deployments (counts diverge per instance).\n- Not considering different user types and endpoints.\n- Returning generic errors without helpful headers.\n- Setting limits too low, which hurts legitimate users.\n- Ignoring monitoring and alerting.\n\n**Monitoring & Alerts**:\n\n- Track rate limit hits and `429` responses.\n- Alert on spikes (possible attacks).\n- Build dashboards for top offending IPs / users.\n- Adjust limits based on real usage patterns.\n\n**Security Checklist**:\n\n- Use HTTPS for all APIs.\n- Authenticate users before applying higher limits.\n- Implement rate limiting at the gateway / edge.\n- Log and review suspicious activity.\n- Keep libraries and dependencies updated.",
      },
      {
        id: "key-takeaway-whats-next",
        title: "Key Takeaway & What's Next",
        content: "**Key Takeaway**: rate limiting and throttling are essential defenses for any backend API. Choose the right algorithm for your traffic pattern, store counters in a fast, shared system (Redis for distributed apps), and always monitor your limits so you can tune them against real usage and catch attacks early.\n\nFor this FastAPI course specifically, the practical path is: install `slowapi`, key limits per client with `get_remote_address` (or per user/API key), decorate routes with `@limiter.limit(\"...\")`, and back it with Redis once you scale beyond a single process.\n\n**What's Next — Day 49: API Security** — Authentication, Authorization, JWT, and OAuth 2.0. Having controlled *how often* clients can call your API, the next step is controlling *who* can call it and *what* they are allowed to do.",
      },
    ],
  },
  {
    pyDay: 44,
    phase: 'FastAPI',
    title: 'FastAPI Production Deployment',
    subtitle: 'Deploy FastAPI with Uvicorn, Docker, and cloud hosting',
    topics: ['Uvicorn & Gunicorn', 'Docker containers', 'Environment variables', 'AWS/Render deploy', 'LLM API serving'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=7N5O62FjGDc', 'Deploy FastAPI', 'ArjanCodes'),
    image: "/python-notes/fastapi-https-ssl-headers.jpg",
    imageAlt: "Day 49 Backend Engineering infographic titled 'HTTPS, SSL/TLS Certificates, and Secure Headers' by @e_opore. It explains why HTTPS matters (encryption in transit, preventing man-in-the-middle attacks, user trust, compliance), defines key concepts (HTTPS as HTTP over TLS, SSL/TLS certificates, secure headers, HSTS, Certificate Authorities), walks through how HTTPS works in five steps and the six-step TLS handshake, covers getting a certificate from Let's Encrypt (free) or DigiCert/Sectigo/GlobalSign (paid) with DV/OV/EV validation levels, lists HTTPS enforcement best practices, and shows three code panels: Node.js Express HTTPS, Python FastAPI with Uvicorn --ssl flags, and Nginx forcing HTTPS. It includes a seven-row secure-headers table, a helmet example, an HSTS explanation, SSL certificate checks, common pitfalls, tools and resources with URLs, a key takeaway, and a final security checklist.",
    sections: [
      {
        id: "why-it-matters-key-concepts",
        title: "Why HTTPS Matters and Core Concepts",
        content: "**Why it matters.** HTTPS is the foundation of a trustworthy backend. It **encrypts data in transit** so attackers on the network cannot read it, **prevents eavesdropping and man-in-the-middle attacks**, and **builds trust with users** because browsers show the padlock icon. Beyond encryption, **secure headers reduce common web vulnerabilities**, and HTTPS is **essential for compliance** with regulations like GDPR and PCI-DSS.\n\n**Key concepts.**\n\n- **HTTPS**: HTTP over **TLS** (Transport Layer Security) — the encrypted version of HTTP.\n- **SSL/TLS Certificates**: prove your domain identity and enable encryption.\n- **Secure Headers**: extra rules the server sends to the browser for safety.\n- **HSTS**: forces browsers to always use HTTPS.\n- **Certificate Authorities (CA)**: trusted organizations that issue SSL/TLS certificates.",
      },
      {
        id: "how-https-works-and-tls-handshake",
        title: "How HTTPS Works and the TLS Handshake",
        content: "**How HTTPS works (5 steps).** The flow is: **User** sends an HTTPS request to **Your Server** (which holds the SSL certificate), and the server returns a secure, encrypted response.\n\n- **1.** Client connects to your domain via HTTPS (port **443**).\n- **2.** Server presents its SSL/TLS certificate.\n- **3.** Client verifies the certificate with the **CA**.\n- **4.** A secure encrypted connection is established.\n- **5.** Data is exchanged securely.\n\n**TLS Handshake (simplified, 6 steps).** This is the negotiation that sets up encryption before any real data flows:\n\n- **1. Client Hello** — client sends supported TLS versions and cipher suites.\n- **2. Server Hello** — server picks a TLS version and cipher suite.\n- **3.** Server sends its **Certificate**.\n- **4.** Client verifies the certificate (CA, expiry, domain).\n- **5.** Key exchange happens and an encrypted channel is established.\n- **6.** Secure data exchange begins.",
      },
      {
        id: "getting-a-certificate-and-enforcing-https",
        title: "Getting a Certificate and Enforcing HTTPS",
        content: "**Getting an SSL/TLS certificate.** You obtain a certificate from a Certificate Authority, choosing a provider and a validation level:\n\n- **Free**: **Let's Encrypt** — recommended for most use cases.\n- **Paid**: **DigiCert**, **Sectigo**, **GlobalSign**, etc.\n- **Domain Validation (DV)**: basic level; proves control of the domain.\n- **Organization Validation (OV)**: business info is verified.\n- **Extended Validation (EV)**: highest trust (rare now).\n\n**Enforce HTTPS best practices.**\n\n- Redirect all **HTTP → HTTPS**.\n- Enable **HSTS** (HTTP Strict Transport Security).\n- Use strong TLS versions (**1.2 and 1.3**).\n- Disable weak ciphers and protocols.\n- Auto-renew certificates (e.g., with Let's Encrypt).\n- Monitor certificate expiry.",
      },
      {
        id: "fastapi-https-uvicorn-ssl",
        title: "Python FastAPI — HTTPS with Uvicorn (--ssl)",
        content: "This is the **FastAPI** way to serve HTTPS directly. You write a normal FastAPI app, then run it with **Uvicorn**, passing the certificate's private key and the full certificate chain via the `--ssl-keyfile` and `--ssl-certfile` flags. Here the paths point at a **Let's Encrypt** certificate under `/etc/letsencrypt/live/yourdomain.com/`: `privkey.pem` is the private key and `fullchain.pem` is the certificate plus intermediate chain. Binding `--host 0.0.0.0 --port 443` exposes the app on the standard HTTPS port. In production it is common to instead terminate TLS at a reverse proxy such as **Nginx** (shown later) and let Uvicorn serve plain HTTP behind it, but running Uvicorn with `--ssl` flags is perfect for direct HTTPS during development or simple deployments.",
        code: "# pip install fastapi uvicorn\n\nfrom fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get('/')\ndef read_root():\n    return {\"message\": \"Hello Secure World! \\U0001F512\"}\n\n# Run with SSL certificate\n# uvicorn main:app --host 0.0.0.0 --port 443 \\\n#   --ssl-keyfile /etc/letsencrypt/live/yourdomain.com/privkey.pem \\\n#   --ssl-certfile /etc/letsencrypt/live/yourdomain.com/fullchain.pem",
      },
      {
        id: "node-express-and-nginx-https",
        title: "Node.js Express and Nginx HTTPS Configuration",
        content: "The same certificate can be served from other stacks. The **Node.js (Express)** example reads the `privkey.pem` and `fullchain.pem` files with `fs.readFileSync` and passes them to `https.createServer`, which then listens on port **443**.\n\nThe **Nginx** example shows the common production pattern: one server block listens on port **80** and issues a `301` redirect of all traffic to `https://`, while a second block listens on **443 ssl** with `http2`. It points `ssl_certificate` at `fullchain.pem` and `ssl_certificate_key` at `privkey.pem`, restricts protocols to `TLSv1.2 TLSv1.3`, prefers server ciphers, and reverse-proxies requests to the app running on `localhost:3000` (this is where a FastAPI/Uvicorn app would sit behind Nginx). This is the recommended way to force HTTPS and terminate TLS.",
        code: "// 1. Node.js (Express) — HTTPS with SSL\n// npm i express https fs\nconst express = require('express');\nconst https = require('https');\nconst fs = require('fs');\n\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello Secure World! \\U0001F512');\n});\n\nconst options = {\n  key: fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/privkey.pem'),\n  cert: fs.readFileSync('/etc/letsencrypt/live/yourdomain.com/fullchain.pem'),\n};\n\nhttps.createServer(options, app).listen(443, () => {\n  console.log('HTTPS server running on port 443');\n});\n\n\n# 3. Nginx — Force HTTPS & Use SSL\nserver {\n    listen 80;\n    server_name yourdomain.com www.yourdomain.com;\n    return 301 https://$host$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name yourdomain.com www.yourdomain.com;\n\n    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;\n\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_prefer_server_ciphers on;\n\n    location / {\n        proxy_pass http://localhost:3000;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n    }\n}",
      },
      {
        id: "secure-headers-you-should-always-use",
        title: "Secure Headers You Should Always Use",
        content: "Secure response headers are cheap, high-impact defenses the server sends to instruct the browser. Each row below lists the **header**, its **purpose**, and an **example value**:\n\n- **Strict-Transport-Security (HSTS)** — forces the browser to use HTTPS. Example: `max-age=31536000; includeSubDomains; preload`\n- **Content-Security-Policy (CSP)** — mitigates XSS and data injection. Example: `default-src 'self'; script-src 'self'`\n- **X-Content-Type-Options** — prevents MIME type sniffing. Example: `nosniff`\n- **X-Frame-Options** — prevents clickjacking. Example: `DENY`\n- **Referrer-Policy** — controls referrer information. Example: `strict-origin-when-cross-origin`\n- **Permissions-Policy** — controls browser features. Example: `geolocation=(), camera=()`\n- **X-XSS-Protection** — (legacy) enables the browser XSS filter. Example: `1; mode=block`",
      },
      {
        id: "set-secure-headers-and-hsts",
        title: "Setting Secure Headers and HSTS",
        content: "**Set secure headers.** In Express the **helmet** middleware applies a strong set of secure headers with `app.use(helmet())`, and you can add custom headers with `res.setHeader`. In FastAPI you would achieve the same by adding a middleware that sets these headers on every response.\n\n**HSTS (HTTP Strict Transport Security).** HSTS tells browsers to only access your site over HTTPS for a period of time, so even a typed `http://` URL is upgraded automatically. The `max-age=31536000` value is one year in seconds; `includeSubDomains` extends it to every subdomain, and `preload` requests inclusion in browsers' built-in preload list. **Tip:** submit your domain to the HSTS preload list (`hsts-preload.org`) for maximum protection.",
        code: "// Set Secure Headers (Express Example)\nconst helmet = require('helmet');\nconst express = require('express');\nconst app = express();\n\napp.use(helmet());\n\n// Custom headers\napp.use((req, res, next) => {\n  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');\n  res.setHeader('Permissions-Policy', 'geolocation=(), camera=()');\n  next();\n});\n\n\n// HSTS header\nres.setHeader(\n  'Strict-Transport-Security',\n  'max-age=31536000; includeSubDomains; preload'\n);",
      },
      {
        id: "check-certificate-pitfalls-tools",
        title: "Checking Certificates, Common Pitfalls, and Tools",
        content: "**Check your SSL certificate.** Confirm it is:\n\n- Valid and not expired.\n- Issued for the correct domain (CN/SAN).\n- Using a strong key length (2048-bit or higher).\n- Serving a complete chain (fullchain).\n\nUse tools such as `https://www.ssllabs.com/ssltest/` or the command `openssl s_client -connect yourdomain.com:443`.\n\n**Common pitfalls.**\n\n- Using self-signed certificates in production.\n- Letting certificates expire.\n- Not redirecting HTTP to HTTPS.\n- Weak TLS versions or ciphers.\n- Missing or misconfigured security headers.\n- Not monitoring certificate renewal.\n\n**Tools & Resources.**\n\n- Let's Encrypt: `https://letsencrypt.org`\n- SSL Labs: `https://www.ssllabs.com/ssltest/`\n- Mozilla SSL Config Generator: `https://ssl-config.mozilla.org`\n- HSTS Preload: `https://hstspreload.org`\n- Header Check: `https://securityheaders.com`",
      },
      {
        id: "takeaway-checklist-whats-next",
        title: "Key Takeaway, Checklist, and What's Next",
        content: "**Key takeaway.** **HTTPS encrypts. Certificates authenticate. Secure headers protect.** Together they build a secure backend that users and browsers can trust.\n\n**Security checklist.**\n\n- HTTPS is enabled and enforced.\n- Valid SSL/TLS certificate installed.\n- HSTS is enabled.\n- Secure headers are configured.\n- Weak protocols and ciphers are disabled.\n- Certificates auto-renew and are monitored.\n\n**What's next.** Day 50 covers **Monitoring, Logging, and Alerting for Backend Systems**. Great job completing Day 49 — keep building, keep learning, keep shipping.",
      },
    ],
  },
  // ── Phase 9: Agentic AI ──
  {
    pyDay: 45,
    phase: 'Agentic AI',
    title: 'Introduction to Agentic AI',
    subtitle: 'AI agents vs agentic AI, memory, planning, and multi-agent systems',
    topics: ['What is Agentic AI', 'Agents vs Agentic AI', 'Memory & planning', 'Agent architecture', 'Multi-agent systems'],
    notionUrl: PORTAL,
    image: '/python-notes/agentic-ai-big-picture.jpg',
    imageAlt: 'Agentic AI: The Big Picture — AI & ML, Deep Learning, Gen AI, AI Agents, and Agentic AI concentric map',
    youtube: yt('https://www.youtube.com/watch?v=sal78ACtGTc', 'Agentic AI Explained', 'IBM Technology'),
    sections: [
      {
        id: 'agentic-ai-roadmap-2025',
        title: 'Agentic AI Roadmap 2025',
        content:
          "A complete field map for becoming an Agentic AI engineer in 2025 — the 11 areas to learn, roughly in order:\n\n1. **Programming & Prompting** — Python / JS / TS, scripting & automation, and prompting concepts (chain-of-thought, multi-agent, reflection, task-planning).\n2. **Basics of AI Agents** — agent architectures (ReAct, CAMEL, AutoGPT), **MCP** & **A2A** protocols, goal decomposition, planning and feedback loops.\n3. **LLMs & APIs** — OpenAI, Claude, Gemini, Mistral, open-source LLMs, function calling and output parsing.\n4. **Tool Use & Integration** — tool systems, memory integration, external APIs, file/search/code-interpreter tools.\n5. **Agent Frameworks** — LangChain, AutoGen, CrewAI, LlamaIndex, Semantic Kernel, Haystack.\n6. **Orchestration & Automation** — LangGraph, n8n, Make, Zapier, DAGs, guardrails, conditional workflows.\n7. **Memory Management** — short / long / episodic memory and vector stores (Pinecone, Weaviate, Chroma, FAISS).\n8. **Knowledge & RAG** — retrieval-augmented generation, embeddings, indexing, query refinement, hybrid search.\n9. **Deployment** — FastAPI / Streamlit / Gradio, serverless, Docker, Kubernetes, agent hosting.\n10. **Monitoring & Evaluation** — LangSmith, logging / tracing, auto-eval loops, dashboards.\n11. **Security & Governance** — prompt-injection protection, API-key management, RBAC, red-teaming, compliance.\n\n*Roadmap by Brij Kishore Pandey (@brijpandeyji).*",
        image: '/python-notes/agentic-ai-roadmap-2025.jpg',
        imageAlt:
          'Agentic AI Roadmap 2025 — 11 areas: Programming & Prompting, Basics of AI Agents, LLMs & APIs, Tool Use & Integration, Agent Frameworks, Orchestration & Automation, Memory Management, Knowledge & RAG, Deployment, Monitoring & Evaluation, and Security & Governance',
      },
    ],
  },
  {
    pyDay: 46,
    phase: 'Agentic AI',
    title: 'LangGraph & MCP',
    subtitle: 'LangGraph workflows and Model Context Protocol servers',
    topics: ['LangGraph intro', 'Graph workflows', 'LangGraph project', 'MCP components', 'MCP servers with LangChain'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=9BPCV5TYPFA', 'LangGraph Tutorial', 'Sam Witteveen'),
    sections: [
      {
        id: 'why-langgraph',
        title: 'Why LangGraph for Agent Loops',
        content:
          "**LangGraph** models an agent as a **stateful graph**: nodes are steps, edges are transitions, and cycles express the plan → act → observe loop.\n\nCompared with a single LangChain chain:\n\n- You get **explicit control flow** (conditionals, retries, human interrupts).\n- **Shared typed state** travels through every node.\n- You can **visualize and debug** which path ran.\n\nThat structure is what production agentic systems need when a linear prompt chain is not enough.",
      },
      {
        id: 'langgraph-multi-agent-workflow',
        title: 'Worked Example — A LangGraph Multi-Agent Workflow',
        content:
          "A concrete shape for the loop above: a **city-assistant** graph that coordinates five specialized agents to answer requests like *\"Search for and summarize upcoming events in {city}\"* or *\"Analyze the information about {city}\"*.\n\n**The flow, node by node:**\n\n1. **Events DB Agent** — fetches upcoming events for `{city}` from the local events database.\n2. **Check for Events in Local Database** — a **conditional edge**, not an agent: if local events are found, the graph continues straight on to the Weather Agent; if none are found, it branches to the **Online Search Agent** instead, which searches the web (**Tavily Search API**) for events — then that result feeds back into the same downstream path.\n3. **Weather Agent** — gets current weather for `{city}` (OpenWeatherMap API).\n4. **Restaurants Agent** — finds top-rated (4★+) restaurants in the city, backed by a **RAG** knowledge base of restaurant data and reviews.\n5. **Analysis Agent** — analyzes and synthesizes everything gathered so far into one coherent answer, then the graph reaches **END**.\n\n**Why this needs a graph, not a chain:** step 2 is exactly the kind of **conditional edge** from the previous section — a linear chain can't skip the Online Search Agent when local data already answers the question, but a graph branches on that check for free. Every agent also reads and writes the **same shared state**, so the Analysis Agent at the end sees everything the earlier agents found.\n\n**Five things a production multi-agent graph needs to get right:**\n\n- **Intelligent Routing** — route each request to the best agent or tool based on intent and context (this is exactly the conditional-edge decision above).\n- **Multi-Agent Collaboration** — specialized agents work together, sequentially or in parallel, to complete a task no single agent could finish alone.\n- **Tool Integration** — connect seamlessly to databases, APIs, knowledge bases, and external services.\n- **Memory & Context** — maintain historical context and past interactions for better decision making.\n- **Accurate & Timely Output** — deliver comprehensive, reliable, up-to-date responses to the user.",
        image: '/python-notes/langgraph-multi-agent-workflow.jpg',
        imageAlt:
          'LangGraph Multi-Agent Workflow — coordinated AI agents working together to solve user requests. START feeds into the Events DB Agent (1), which fetches upcoming events from the local database, then a "Check for Events in Local Database" decision: if local events are found, the flow continues to the Weather Agent (3); if not, it branches to the Online Search Agent (2), which performs a web search via the Tavily Search API for events. From there the flow continues through the Weather Agent (3, current weather via OpenWeatherMap API), the Restaurants Agent (4, top-rated 4-star-plus restaurants via a RAG knowledge base), and the Analysis Agent (5, analyzes and synthesizes information about the city), ending at END. A left panel lists sample Actions (user requests like "Get upcoming events for {city}", "Get current weather for {city}", "Find restaurants with 4 stars or higher ratings in {city}", "Analyze the information about {city}", "Search for and summarize upcoming events in {city}"). A right panel lists Tools & Functions: Local Events Database, Online Search (Tavily Search API), Weather (OpenWeatherMap API), and Restaurants Recommendations (RAG). A bottom band lists five principles: Intelligent Routing, Multi-Agent Collaboration, Tool Integration, Memory & Context, and Accurate & Timely Output.',
      },
      {
        id: 'graph-state-nodes',
        title: 'State, Nodes, Edges, and Compile',
        content:
          "Define a **state schema** (TypedDict / Pydantic). Each **node** is a function that reads state and returns updates. **Edges** connect nodes; **conditional edges** branch on tool results or flags.\n\nCompile the graph into a runnable app, then `invoke` with initial state. Always set **max steps** / recursion limits so a bad loop cannot burn your budget.",
        code: 'from typing import TypedDict\nfrom langgraph.graph import StateGraph, END\n\nclass AgentState(TypedDict):\n    goal: str\n    notes: str\n    draft: str\n\ndef plan(state: AgentState):\n    return {"notes": f"Plan for: {state[\'goal\']}"}\n\ndef write(state: AgentState):\n    return {"draft": state["notes"]}\n\ngraph = StateGraph(AgentState)\ngraph.add_node("plan", plan)\ngraph.add_node("write", write)\ngraph.set_entry_point("plan")\ngraph.add_edge("plan", "write")\ngraph.add_edge("write", END)\napp = graph.compile()\napp.invoke({"goal": "Summarize MCP", "notes": "", "draft": ""})',
      },
      {
        id: 'mcp-basics',
        title: 'Model Context Protocol (MCP)',
        content:
          "**MCP** is a standard for connecting models to **tools and context** (filesystem, browser, DB, custom APIs).\n\nCore pieces:\n\n- **Host / client** — the app or agent runtime that talks MCP.\n- **Server** — exposes tools and resources over the protocol.\n- **Tools** — callable actions with schemas.\n- **Resources / prompts** — readable context the model can pull in.\n\nWhy it matters: tool wiring becomes **portable** across editors and agent frameworks instead of one-off glue per product.",
      },
      {
        id: 'mcp-vs-api',
        title: 'MCP vs API — Different by Design, Powerful Together',
        content:
          "MCP and APIs solve **different problems**. Comparing them aspect by aspect:\n\n" +
          "- **What it is:** MCP is a protocol that provides context and capabilities to AI models. An API is a set of rules that allows applications to communicate and exchange data.\n" +
          "- **Who it's for:** MCP is for AI models, LLMs, and AI-powered applications. APIs are for applications, systems, mobile apps, web apps, and developers.\n" +
          "- **Purpose:** MCP provides context, tools, and data to help AI models understand and act. APIs enable communication between systems to perform operations (CRUD, auth, transactions, etc.).\n" +
          "- **What it enables:** MCP enables context sharing, tool discovery, prompting, and capability negotiation. APIs enable data exchange, functionality access, and integration between systems.\n" +
          "- **How it works:** MCP is dynamic, context-aware, semantic communication. APIs are request/response based on endpoints (REST, GraphQL, SOAP, etc.).\n" +
          "- **Use cases:** MCP powers AI copilots, intelligent agents, LLM plugins, and AI workflows. APIs power mobile apps, web apps, SaaS platforms, integrations, and third-party services.\n" +
          "- **Relationship:** MCP complements API by bringing context and intelligence — **APIs provide the actions, MCP provides the understanding.**\n\n" +
          "**In short:** APIs power applications. MCP powers intelligence. The future is not MCP vs API — it's **MCP + API**.\n\n" +
          "With the rise of AI, a new standard is emerging: Model Context Protocol (MCP). While APIs have been the backbone of integrations for decades, MCP is designed to bring context, tools, and intelligence to AI models. Both solve different problems — but when combined, they unlock the real potential: applications that are not just connected, but also context-aware and intelligent.",
        image: '/python-notes/mcp-vs-api.jpg',
        imageAlt:
          "MCP vs API — Different by Design, Powerful Together. A 7-row comparison table across What it is, Who it's for, Purpose, What it enables, How it works, Use cases, and Relationship: MCP (a protocol that provides context and capabilities to AI models, for AI models/LLMs/AI-powered apps, enabling context sharing/tool discovery/prompting/capability negotiation via dynamic context-aware semantic communication, powering AI copilots/intelligent agents/LLM plugins/AI workflows, complementing API by bringing context and intelligence) versus API (a set of rules allowing applications to communicate and exchange data, for applications/systems/mobile apps/web apps/developers, enabling data exchange/functionality access/integration via request-response endpoints like REST/GraphQL/SOAP, powering mobile apps/web apps/SaaS platforms/integrations/third-party services, providing the actions while MCP provides the understanding). Concludes: APIs power applications, MCP powers intelligence — the future is MCP + API, not MCP vs API.",
      },
      {
        id: 'mcp-with-langchain',
        title: 'MCP Servers with LangChain / LangGraph',
        content:
          "Run or connect an MCP server, **list tools**, then bind them into your agent/graph so the LLM can call them like any other tool.\n\nStill apply Day-45 safety: timeouts, least privilege, and **human approval** before destructive writes — MCP standardizes discovery, not your security policy.",
        code: '# Pseudocode shape\ntools = mcp_client.list_tools()\n# bind tools into LangGraph / LangChain agent\n# agent.invoke({"messages": [...]})',
      },
      {
        id: 'day46-checklist',
        title: 'Day 46 Checklist & What’s Next',
        content:
          "Before moving on, you should be able to:\n\n- Build a small LangGraph with typed state, two nodes, and a compile/invoke path.\n- Explain conditional edges and why max-step limits matter.\n- Describe MCP client/server/tools at a high level.\n- Wire (or sketch) one MCP tool into an agent loop.\n\n**What’s next — Day 47:** visual automation with **n8n** — triggers, AI nodes, credentials, and human gates.",
      },
    ],
  },
  {
    pyDay: 47,
    phase: 'Agentic AI',
    title: 'n8n & Agentic AI Workflows',
    subtitle: 'Automation with n8n, AI agent prompts, and end-to-end agentic pipelines',
    topics: ['n8n automation', 'Trigger & action nodes', 'AI agent prompts', 'Credential setup', 'Agentic workflow project'],
    notionUrl: PORTAL,
    youtube: yt('https://www.youtube.com/watch?v=KOLd6XZ9DaI', 'n8n AI Agents', 'n8n'),
    sections: [
      {
        id: 'why-n8n',
        title: 'Why n8n for Agentic Pipelines',
        content:
          "**n8n** is a visual workflow tool. For agentic systems it shines when you need to connect **webhooks, SaaS APIs, LLMs, and humans** without writing all the glue yourself.\n\nUse code (LangGraph) when control flow and state are complex. Use n8n when the job is **integration-heavy**: ticket systems, Slack, Sheets, CRM, schedules.",
      },
      {
        id: 'triggers-actions',
        title: 'Triggers, Actions, and Branching',
        content:
          "A workflow starts with a **trigger** (Webhook, Schedule, or app event). **Action nodes** call HTTP APIs, send Slack messages, or run AI Agent nodes.\n\n**IF / Switch** nodes route success vs failure. Treat execution history as your debugger — inspect each node’s input and output.",
      },
      {
        id: 'credentials-prompts',
        title: 'Credentials and AI Agent Prompts',
        content:
          "Store API keys in the **n8n credentials vault**, not inside node JSON. Rotate keys without rewriting the flow.\n\nFor AI Agent nodes, write a clear **system prompt**, name tools well, and describe when each tool should be used. Bad tool descriptions cause the same wrong-tool failures you see in code agents.",
      },
      {
        id: 'hitl-e2e',
        title: 'Human-in-the-Loop E2E Project',
        content:
          "Classic pattern:\n\n1. Webhook receives a support ticket.\n2. AI agent researches / drafts a reply.\n3. **Human approval** node gates the send.\n4. On approve → send email/Slack; on reject → revise or escalate.\n5. Log the run for later eval.\n\nNever auto-send irreversible messages until you trust the eval numbers (Day 50).",
        code: 'Webhook → AI Agent → Wait/Approve\n→ IF approved → Send\n→ ELSE → Revise / Escalate',
      },
      {
        id: 'day47-checklist',
        title: 'Day 47 Checklist & What’s Next',
        content:
          "Before moving on, you should be able to:\n\n- Build a webhook → AI → respond workflow in n8n.\n- Use credentials instead of hardcoded secrets.\n- Branch success/failure paths.\n- Add a human approval gate before a side effect.\n\n**What’s next — Days 48–50 (journal arc):** multi-agent patterns, memory/tool contracts, and evaluation/observability.",
      },
    ],
  },
];
