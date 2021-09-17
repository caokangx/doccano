Category_CSV = """
text,label
"电冰箱起火导致爆炸","冰箱"
"Really great transaction.","positive"
"Great price.","positive"
"""

Category_fastText = """
__label__negative 电冰箱起火导致爆炸
__label__positive Really great transaction.
__label__positive Great price.
"""

Category_JSON = """
[
    {
        "text": "电冰箱起火导致爆炸",
        "label": ["冰箱"]
    }
]
"""

Category_JSONL = """
{"text": "电冰箱起火导致爆炸", "label": ["冰箱"]}
{"text": "Really great transaction.", "label": ["positive"]}
{"text": "Great price.", "label": ["positive"]}
"""

Text_CSV = """
text,label
"Hello!","こんにちは！"
"Good morning.","おはようございます。"
"See you.","さようなら。"
"""

Text_JSON = """
[
    {
        "text": "Hello!",
        "label": ["こんにちは！"]
    }
]
"""

Text_JSONL = """
{"text": "Hello!", "label": ["こんにちは！"]}
{"text": "Good morning.", "label": ["おはようございます。"]}
{"text": "See you.", "label": ["さようなら。"]}
"""

Offset_JSONL = """
{"text": "EU rejects German call to boycott British lamb.", "label": [ [0, 2, "ORG"], [11, 17, "MISC"], ... ]}
{"text": "Peter Blackburn", "label": [ [0, 15, "PERSON"] ]}
{"text": "President Obama", "label": [ [10, 15, "PERSON"] ]}
"""

CategoryImageClassification = """
[
    {
        "filename": "20210514.png",
        "label": ["cat"]
    }
]
"""

Speech2Text = """
[
    {
        "filename": "20210514.mp3",
        "label": ["Lorem ipsum dolor sit amet"]
    }
]
"""
