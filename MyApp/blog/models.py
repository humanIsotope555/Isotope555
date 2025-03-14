from django.db import models


class Post(models.Model):
    """ The model of blog """
    title = models.CharField(max_length=200)
    author = models.ForeignKey(
        'auth.User',
        on_delete=models.CASCADE,
    )
    topic = models.CharField(max_length=50, default="Новости")
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
