provider "aws" {
	region = "us-east-1"
}

variable "bucket_name" {
	type = string
}

resource "aws_s3_bucket" "images_bucket" {
	bucket = "product-${var.bucket_name}"
}

resource "aws_s3_bucket_public_access_block" "images_bucket" {
  bucket = aws_s3_bucket.images_bucket.id

  block_public_acls = false
  block_public_policy = false
  ignore_public_acls = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_ownership_controls" "images_bucket" {
 bucket = aws_s3_bucket.images_bucket.id

 rule {
	object_ownership = "BucketOwnerPreferred"
 }
}

resource "aws_s3_bucket_acl" "images_bucket" {
 depends_on = [ 
	aws_s3_bucket_public_access_block.images_bucket,
	aws_s3_bucket_ownership_controls.images_bucket
]

 bucket = aws_s3_bucket.images_bucket.id
 acl = "public-read"
}