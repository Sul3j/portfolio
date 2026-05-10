from rest_framework import serializers
from .models import Project, ProjectImage, ContactMessage


class ProjectImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None

    class Meta:
        model = ProjectImage
        fields = ['id', 'image', 'caption', 'order']


class ProjectListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'slug', 'short_description', 'technologies', 'preview_url', 'github_url']


class ProjectDetailSerializer(serializers.ModelSerializer):
    images = ProjectImageSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ['id', 'title', 'slug', 'short_description', 'content', 'technologies', 'preview_url', 'github_url', 'images']


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['first_name', 'last_name', 'email', 'message']
