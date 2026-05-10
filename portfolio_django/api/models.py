from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    short_description = models.TextField()
    content = models.TextField(help_text="Treść w formacie Markdown")
    technologies = models.JSONField(default=list)
    preview_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    order = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = "Projekt"
        verbose_name_plural = "Projekty"

    def __str__(self):
        return self.title


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='projects/')
    caption = models.CharField(max_length=200, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Zdjęcie projektu"
        verbose_name_plural = "Zdjęcia projektów"

    def __str__(self):
        return f"{self.project.title} – zdjęcie {self.order}"


class ContactMessage(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Wiadomość"
        verbose_name_plural = "Wiadomości"

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.created_at.strftime('%Y-%m-%d %H:%M')})"
