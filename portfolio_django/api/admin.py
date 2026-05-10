from django.contrib import admin
from django.utils.html import format_html
from .models import Project, ProjectImage, ContactMessage


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    fields = ['image', 'caption', 'order']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'order', 'is_published', 'created_at']
    list_editable = ['order', 'is_published']
    list_filter = ['is_published']
    search_fields = ['title', 'short_description']
    prepopulated_fields = {'slug': ('title',)}
    inlines = [ProjectImageInline]
    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'order', 'is_published')
        }),
        ('Treść', {
            'fields': ('short_description', 'content', 'technologies')
        }),
        ('Linki', {
            'fields': ('preview_url', 'github_url')
        }),
    )


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'created_at', 'is_read']
    list_filter = ['is_read', 'created_at']
    list_editable = ['is_read']
    readonly_fields = ['first_name', 'last_name', 'email', 'message', 'created_at']
    search_fields = ['first_name', 'last_name', 'email']

    def full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"
    full_name.short_description = "Imię i nazwisko"

    def has_add_permission(self, request):
        return False
